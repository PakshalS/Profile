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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1175px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

