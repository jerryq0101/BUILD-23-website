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
        Suisse: ["Suisse", ...defaultTheme.fontFamily.sans],
        Slang: ["GrandSlang", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
