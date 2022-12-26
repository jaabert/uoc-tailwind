/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#030303",
      white: "#f3f3f3",
      grey: "#c7c5c5",
      greyDark: "",
      orange: "#ee7b0f",
      orangeActive: "#f6b06e",
      blue: "#0d6efd",
      blueActive: "#0b5ed7",
    },
    screens: {
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
      },
    },
  },
  plugins: [],
};
