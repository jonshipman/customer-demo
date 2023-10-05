import { Card } from './card.js';
import Image from 'next/image';
import avatarPhoto from './avatarPhoto.webp';
import { parseAddress } from '@/lib/parse.js';

export function CustomerCard({ children: customer, count, onCancel = () => {} }) {
	return (
		<Card>
			<div className="relative">
				{count === 1 && (
					<div
						className="absolute top-0 right-0 rounded-full bg-blue-darkest flex p-1 leading-none cursor-pointer"
						onClick={onCancel}
						role="button"
					>
						&times;
					</div>
				)}
				<div className="flex justify-between text-xs">
					<div>
						<Image src={avatarPhoto} className="block rounded-full" alt="avatar" />
					</div>
					<div className="grow px-4">
						<CustomerDetail label="Name">
							{customer.firstName} {customer.lastName}
						</CustomerDetail>
						<CustomerDetail label="Phone">{customer.phones[0]}</CustomerDetail>
						<CustomerDetail label="Email">{customer.emails[0]}</CustomerDetail>
						<CustomerDetail label="Address">{parseAddress(customer.addresses)}</CustomerDetail>
					</div>
					<div />
				</div>
			</div>
		</Card>
	);
}

function CustomerDetail({ label, children }) {
	if (!children) return null;

	return (
		<div className="mb-3 text-gray-400">
			{label}: <span className="font-bold text-white">{children}</span>
		</div>
	);
}
