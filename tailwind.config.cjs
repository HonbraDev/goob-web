/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "Inter", "sans-serif"],
      mono: ["monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
