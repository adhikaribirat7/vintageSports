/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'costume-color':'#7562E0',
        'nav-color':'#181824',
        'low-priority': '#848191'
      }
    },
  },
  plugins: [],
}