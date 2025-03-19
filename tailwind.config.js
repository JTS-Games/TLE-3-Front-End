/ @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : '#EFF7FF',
        'button' : '#CCE6FE',
        'headerBlue' : '#6494ED',
        'correct' : '#73FFE8',
        'incorrect' : '#FF1A7D',
        'offwhite' : '#F8F7F7'
      },
      backgroundImage: {
        'blue-white-gradient': "url('src/assets/background/mesh-gradient-blue-white.png')"
      },
      fontFamily: {
        kulim: ["Kulim Park", "sans-serif"]
      },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

