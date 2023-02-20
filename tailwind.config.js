// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroGradient: "linear-gradient(0deg, rgb(0, 0, 0), transparent)",
        heroImage: "url('../public/images/home_hero_2200x720.jpeg')",
      },
      boxShadow: {
        "3xl": "0 0 60px 0 rgb(0 0 0 / 10%);",
        "4xl": "0 0 120px 0 rgb(0 0 0 / 10%)",
      },
      colors: {
        brandBlack: "#333",
        brandBlue: "#0077b3",
        brandGrey: "#f2efed",
        brandOrange: "#cc4100",
        brandGreen: "#008053",
        brandPurple: "#3b2171",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
      },
      maxWidth: {
        "5.5xl": "1028px",
      },
      spacing: {
        7.5: "1.875rem", //30px
      },
    },
  },
  plugins: [],
};
