/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  corePlugins: {
    gridAutoFlow: false,
  },
  theme: {
    fontFamily: {
      lilita  : ['Lilita One', 'sans-serif'],
      roboto : ['Roboto Condensed', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

