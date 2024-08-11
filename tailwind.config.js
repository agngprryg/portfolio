/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      apple: ["Borel", "cursive"],
    },
    colors: {
      primary: "#331c52",
      secondary: "#fef7dd",
      tertiary: "#fcad2a",
      green: "#134e3a",
      black: "#000000",
      white: "#ffffff",
    },
  },
  plugins: [],
};
