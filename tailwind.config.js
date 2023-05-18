/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "poppins-regular": ["Poppins-Regular"],
        "poppins-bold": ["Poppins-Bold"],
        "poppins-bi": ["Poppins-BoldItalic"],
        "poppins-eb": ["Poppins-ExtraBold"],
        "poppins-ebi": ["Poppins-ExtraBoldItalic"],
        "poppins-italic": ["Poppins-Italic"]
        
      }
    },
  },
  plugins: [],
}

