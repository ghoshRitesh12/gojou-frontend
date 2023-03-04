/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          400: '#a257ff',
          300: 'hsl(267, 89%, 72%)',
          200: 'hsl(267, 89%, 80%)',
          100: 'hsl(267, 89%, 88%)',
        },
        primary: {
          900: '#0c0c0c',
          glass: 'hsl(0, 0%, 5%, .3)',
        },
      },
      fontFamily: {
        srcsansp: ['"Source Sans Pro"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
