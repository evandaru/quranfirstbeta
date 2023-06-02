/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat'],
    },
    extend: {
      color: {
        'green-gw': 'rgba(44, 186, 77, 1)'
      },
      borderColor: {
        'green-gw': 'rgba(44, 186, 77, 1)'
      },
      backgroundColor: {
        'green-gw': 'rgba(44, 186, 77, 1)'
      }
    },
  },
  plugins: [],
}

