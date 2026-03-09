/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Make sure this includes your files!
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange-brand" : "#DA7756",
        "white-brand" : "#FCFCFC",
        "grey-brand" : "#8C8C8C",
      "black-brand" : "#171717",
      "red-brand" : "#991B1B",
      "green-brand": "#166534",
      "yellow-brand" : "#854D0E",
      "colorpicker-white-brand" : "#FFF5F5"
      }
    },
  },
  plugins: [],
}

