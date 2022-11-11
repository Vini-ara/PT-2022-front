/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': "#577590",
        'save':'#219653',
        'delete': '#DD3030',
        'warning': '#FFD747',
        'information': '#56CCF2',
        'disabled': '#A4ABB2'
      }
    },
  },
  plugins: [],
}