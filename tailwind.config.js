/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "pastel-pink": "#DEC1BE",
        "pastel-pink-dark": "#C88780",
        "pastel-red": "#9A5A5A",
        "pastel-brown": "#B67373",
        "pastel-brown-dark": "#925E5E",
        "pastel-brown-light": "#D6B4A8",
        "pastel-pink-light": "#fdf7f4",
        "eerie-black": "#222222",
      },
    },
  },
  plugins: [],
};
