/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    require('daisyui'),
    require("tailwindcss-animate"),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
  daisyui: {
    themes: ["winter", "sunset"],
    darkTheme: "sunset",
  },
}