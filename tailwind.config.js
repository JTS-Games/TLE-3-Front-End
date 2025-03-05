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
        'button' : '#CCE6FE'
      }
    },
  },
  plugins: [],
}

