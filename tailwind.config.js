/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'panel': '#111219',
        'muted': '#9aa0a6',
        'accent': '#f6f263'
      }
    },
  },
  plugins: [],
}
