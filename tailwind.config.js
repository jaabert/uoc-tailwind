/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "4/25xl": "2.5rem",
      "5xl": "3.052rem",
      175: "1.75rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#030303",
      white: "#f3f3f3",
      grey: "#c7c5c5",
      greyDark: "#dee2e6",
      orange: "#ee7b0f",
      orangeActive: "#f6b06e",
      blue: "#0d6efd",
      blueActive: "#0b5ed7",
    },
    screens: {
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    container: {
      padding: "0.75rem",
      screens: {
        md: "720px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
      },
    },
    extend: {
      flexBasis: {
        300: "300px",
      },
      spacing: {
        18: "18px",
        312: ".3125rem",
      },
    },
  },
  plugins: [],
};
