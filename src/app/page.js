'use client';

import { useEffect, useRef, useState } from 'react';

import { CustomerCard } from '@/components/customer-card.js';
import { Field } from '@/components/field.js';
import { Widget } from '@/components/widget.js';
import customerdata from '@/data/customers.json';

export default function Home() {
	const [customer, setCustomer] = useState({ firstName: '', lastName: '', email: '', phone: '' });
	const [customers, setCustomers] = useState(customerdata.data.listCustomers);
	const customerLength = useRef();
	customerLength.current = customers.length;

	const generalChange = (event) => {
		event.stopPropagation();
		const name = event.currentTarget.name;
		const value = event.currentTarget.value || '';

		if (name) {
			setCustomer((c) => ({ ...c, [name]: value }));
		}

		if (name === 'email') {
			setCustomers(
				customerdata.data.listCustomers.filter((x) => {
					let pass = false;
					for (const e of x.emails) {
						if (e.includes(value)) pass = true;
					}

					return pass;
				})
			);
		}
	};

	function reset() {
		const newobj = { firstName: '', lastName: '', phone: '' };
		if (customer.email === customers[0].emails[0]) newobj.email = '';

		setCustomers(customerdata.data.listCustomers);
		setCustomer((c) => ({ ...c, ...newobj }));
	}

	function setEmail() {
		setTimeout(() => {
			if (customerLength.current === 1) {
				setCustomer((c) => ({ ...c, email: customers[0].emails[0] }));
			}
		}, 100);
	}

	useEffect(() => {
		if (customers.length === 1) {
			const cus = customers[0];
			setCustomer((c) => {
				return { ...c, firstName: cus.firstName, lastName: cus.lastName, phone: cus.phones[0] };
			});
		}
	}, [customers]);

	return (
		<main className="flex min-h-screen flex-col items-stretch justify-between p-24">
			<div className="search flex items-stretch grow w-full">
				<div className="left-pane w-1/2 grow flex">
					<Widget>
						<Field
							disabled={customers.length === 1}
							name="firstName"
							label="First Name"
							value={customer.firstName}
							onChange={generalChange}
						/>
						<Field
							disabled={customers.length === 1}
							name="lastName"
							label="Last Name"
							value={customer.lastName}
							onChange={generalChange}
						/>
						<Field
							name="email"
							label="Email"
							value={customer.email}
							onChange={generalChange}
							onBlur={setEmail}
						/>
						<Field
							disabled={customers.length === 1}
							name="phone"
							label="Phone"
							value={customer.phone}
							onChange={generalChange}
						/>
					</Widget>
				</div>
				<div className="right-pane w-1/2 grow flex">
					<Widget>
						{customers.map((customer) => (
							<CustomerCard key={customer._id} count={customers.length} onCancel={reset}>
								{customer}
							</CustomerCard>
						))}
					</Widget>
				</div>
			</div>
		</main>
	);
}
