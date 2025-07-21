import { env } from 'node:process';

const events = {
	build: 'onBuild',
	dev: 'onDev',
	end: 'onEnd',
	error: 'onError',
	post_build: 'onPostBuild',
	pre_build: 'onPreBuild',
	pre_dev: 'onPreDev',
	success: 'onSuccess',
};

async function handler({ inputs }) {
	const url = env[inputs.variable];

	if (url) {
		await fetch(url, {
			method: 'POST',
		});
	}
}

export default function plugin(inputs) {
	const event = events[inputs.event];

	return {
		[event]: handler,
	};
}
