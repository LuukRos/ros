/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        caret: 'caret 1s ease-in-out infinite',
      },
      fontFamily: {
        mono: ['var(--font-cartograph)'],
      },
      keyframes: {
        caret: {
          '50%': { 'background-color': 'transparent' },
        },
      },
    },
  },
  plugins: [require('@catppuccin/tailwindcss')],
};
