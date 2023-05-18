/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...require('tailwindcss/colors'),
      "primary": "#F15D22",
      "secondary": "#EAAC21",
      "light-aqua": "#96C0D1"
    }
  },
  variants: {},
  plugins: [],
}

