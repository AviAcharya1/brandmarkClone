/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // gridTemplateColumns: {
      //   'creations-sm': 'repeat(3, 1fr)',
      //   'creations-md': 'repeat(4, 1fr)',
      // },
      // gridTemplateRows: {
      //   'creations-sm': 'repeat(11, auto)',
      //   'creations-md': 'repeat(7, auto)',
      // },
      colors: {
        'feature-pink': '#ee5495',
        'feature-green': '#79b790',
        'feature-blue': '#9baed9',
        'feature-yellow': '#e3a624',
        'feature-dark': '#292e34',
      },
    },
  },
  variants: {},
  plugins: [],
}
