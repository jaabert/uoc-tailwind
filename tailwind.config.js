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
      2: "2rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#030303",
      blackText: "#212529",
      ultrawhite: "#ffffff",
      white: "#f3f3f3",
      grey: "#c7c5c5",
      greyDark: "#dee2e6",
      greyForm: "#6c757d",
      orange: "#ee7b0f",
      orangeActive: "#f6b06e",
      blue: "#0d6efd",
      blueActive: "#0b5ed7",
      blueForm: "#86b7fe",
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
        24: "24px",
        312: ".3125rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        formShadow: "0 0 0 .25rem #0d6efd40",
      },
    },
  },
  plugins: [],
};
