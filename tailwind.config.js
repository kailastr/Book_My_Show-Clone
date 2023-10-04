/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", //this line of code says that the tailwind css we use could be either directly in the src file or inside another folder in the js,jsx,ts,tsx formats
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

