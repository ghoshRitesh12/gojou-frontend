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
          900: 'hsl(248, 40%, 15%)',
          500: '#222',
          200: '#e7e7e7',
          100: '#ffffff'
        },
        inactive: {
          900: '#777',
          100: '#eee'
        },
      },
      fontFamily: {
        srcsansp: ['"Source Sans Pro"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
