/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryBlue: "#0073b1",
			},
			fontFamily: {
				sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu", "sans-serif"],
				serif: ["Merriweather", "serif"],
			},
		},
	},
	plugins: [],
};
