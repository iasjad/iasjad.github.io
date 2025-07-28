// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#111827', // A deep, modern dark blue/gray
        'brand-light': '#F3F4F6', // Off-white for text
        'brand-accent': '#F59E0B', // A warm, yellowish-amber accent
        'brand-accent-hover': '#D97706',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A clean, modern sans-serif font
      },
    },
  },
  plugins: [],
};
