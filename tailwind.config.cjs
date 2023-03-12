/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: ["system-ui", "sans-serif"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
