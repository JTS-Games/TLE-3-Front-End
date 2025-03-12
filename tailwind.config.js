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
        'headerBlue' : '#6494ED',
      },
      fontFamily: {
        kulim: ["Kulim Park", "sans-serif"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

