import formsPlugin from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
    },
    fontFamily: {
      mono: ["Manrope", "Helvetica", "Arial", "sans-serif"],
    },
    colors: {
      black: "#0A0A0A",
      white: "#FFFFFF",
      orange: "#FF6422",
      blueLight: "#B2E3FF",
      pinkLight: "#FDB2FF",
      yellowLight: "#FFE9B2",
      orangeLight: "#FFC0B2"
    }
  },
  plugins: [
    formsPlugin,
  ],
}

