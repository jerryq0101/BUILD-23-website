/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./partials/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Space: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        PT: ["PT Sans Caption", ...defaultTheme.fontFamily.sans],
        Bodoni: ["Bodoni Moda", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
