export const parseAddress = (addressObject) => {
	if (Array.isArray(addressObject)) return addressObject.map(parseAddress).join(', ');
	if (typeof addressObject === 'string') return addressObject;
	if (!addressObject) return '';

	const locality = [addressObject.state, addressObject.zip].filter((part) => part).join(' ');
	const parts = [addressObject.address1, addressObject.address2, addressObject.city, locality];

	return parts.filter((part) => part).join(', ');
};
