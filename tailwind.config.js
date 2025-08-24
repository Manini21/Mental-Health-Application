/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          light: '#f7f4f9',      // A very light, off-white
          lilac: '#e6e0ef',     // A soft, light purple
          lavender: '#d8ccef',  // A muted lavender
          mint: '#c8e8d8',      // A gentle mint green
          peach: '#f7d8c8',     // A soft peach
          pink: '#f7c8d8',      // A light pastel pink
          blue: '#c8d8f7',      // A soothing pastel blue
          purple: '#b7a2d8',    // A slightly deeper purple
          dark: '#3f384a',      // A dark, dusty purple for text
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
