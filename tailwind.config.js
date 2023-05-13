/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@catppuccin/tailwindcss')],
  theme: {
    extend: {
      animation: {
        caret: 'caret 1s ease-in-out infinite',
      },
      fontFamily: {
        mono: ['var(--font-cartograph)'],
        italic: ['var(--font-cartograph-italic)'],
      },
      keyframes: {
        caret: {
          '50%': { 'background-color': 'transparent' },
        },
      },
    },
  },
};
