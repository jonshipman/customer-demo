export function Field({ label, ...props }) {
	return (
		<div className="pb-4">
			<label className="text-white text-sm">
				<span>{label}</span>
				<input className="bg-blue-lowest rounded w-full p-1" {...props} />
			</label>
		</div>
	);
}
