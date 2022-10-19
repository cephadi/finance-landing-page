/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightGreen: '#00df9a',
        brightGreenLight: '#03fcaf',
        darkBlack: '#000300'
      }
    },
  },
  plugins: [],
}
