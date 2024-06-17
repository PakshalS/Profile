/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'about-back': "url('/src/assets/banner-bg.png')",
      }
    },
  },
  plugins: [],
}

