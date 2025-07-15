export const onSuccess = async function ({ inputs }) {
	await fetch(inputs.url, {
		method: 'POST',
	});
};
