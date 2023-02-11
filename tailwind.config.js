/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-cartograph)'],
      },
    },
  },
  plugins: [require('@catppuccin/tailwindcss')],
};
