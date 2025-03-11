/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : '#EFF7FF',
        'button' : '#CCE6FE',
        'correct' : '#73FFE8',
        'incorrect' : '#FF1A7D',
        'offwhite' : '#F8F7F7'
      }
    },
  },
  plugins: [],
}

