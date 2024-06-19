/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'about-back': "url('/src/assets/banner-bg.png')",
        'frame':"url('src/assets/color-sharp.png')",
        'frame2':"url('src/assets/color-sharp2.png')",
        'frame3':"url('src/assets/footer-bg.png')"
      }
    },
  },
  plugins: [],
}

