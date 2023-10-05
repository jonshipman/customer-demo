const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			inherit: 'inherit',
			black: colors.black,
			blue: {
				darkest: 'rgb(19, 19, 36)',
				DEFAULT: 'rgb(29, 31, 48)',
				lowest: 'rgb(51, 53, 68)'
			},
			red: colors.red,
			white: colors.white,
			gray: colors.gray
		}
	},
	plugins: []
};
