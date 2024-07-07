/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      scale: {
        '60': '0.6',
      }
    },
  },
  plugins: [],
}