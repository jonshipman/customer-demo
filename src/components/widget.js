export function Widget({ children }) {
	return (
		<div className="p-4 grow flex">
			<div className="grow p-4 rounded-md bg-blue">{children}</div>
		</div>
	);
}
