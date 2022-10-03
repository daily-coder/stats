/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: "Poppins, Arial, sans-serif",
      },
      backgroundImage: {
        home: "url('./images/scattered-forcefields.svg')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
