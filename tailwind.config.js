/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#446A9C',
        secondary: '#4F3A13'
      },
      fontFamily: {
      'sans-serif': ['Tajawal', 'sans-serif']
    },
  },
  plugins: [],
}
}