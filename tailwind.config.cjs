/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
     extend: {
      colors: {
        'blue-header': "#577590",
        'save':'#219653',
        'delete': '#DD3030',
        'warning': '#FFD747',
        'information': '#56CCF2',
        'disabled': '#A4ABB2',
        'dark-gray': '#888888',
        'facebook' :'#08558B',
        'dark-blue': '#002F67',
        'blue-form':'#79A4CB',
        'transparent-bg': 'rgba(87, 117, 144, 0.5)',
        'w-bg': 'rgba(237, 237, 233, 1)',
        'text-green': '#73C04A',
        'text-blue' : 'rgba(0, 47, 103, 1)',
      }
    },
  },
  plugins: [],
}