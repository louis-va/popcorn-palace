import formsPlugin from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
    },
    fontFamily: {
      mono: ['Manrope', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      'black': {
        DEFAULT: 'rgb(10, 10, 10)'
      },
      'white': {
        DEFAULT: 'rgb(255, 255, 255)',
        muted: 'rgba(255, 255, 255, .5)'
      },
      'orange': {
        light: 'rgb(255, 128, 73)',
        DEFAULT: 'rgb(255, 100, 34)',
        dark: 'rgb(250, 75, 0)'
      },
      'red': {
        DEFAULT: 'rgb(153, 27, 27)'
      },
      'green': {
        DEFAULT: 'rgb(63, 98, 18)'
      }
    }
  },
  plugins: [
    formsPlugin,
  ],
}

