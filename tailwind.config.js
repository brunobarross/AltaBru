/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'montserrat': ['Montserrat'],
      'open_sans': ['Open Sans', 'sans-serif']
    },
    extend: {
      colors:{
        'neutral-black': '#111111',
        'secondary-pure': '#101629',
        'primary-pure': '#0192E4'
      }
    },
  },
  plugins: [],
}
