/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: '#4AB5CF',
          2: '#0046A8',
        },
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { right: '-500px' },
          '100%': { right: '0' },
        },
        slideOut: {
          '0%': { right: '0' },
          '100%': { right: '-500px' },
        },
      },
      animation: {
        'slide-in': 'slideIn 300ms ease-in-out',
        'slide-out': 'slideOut 300ms ease-in-out',
      },
    },
  },
  plugins: [],
}
