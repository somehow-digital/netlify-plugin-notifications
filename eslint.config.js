import config from '@somehow-digital/eslint-config/basic';
import globals from 'globals';

export default [
	...config,
	{
		ignores: ['**/.*/'],
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
	},
];
