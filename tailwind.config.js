/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here

      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'header-xl': '34px',
        'header-l': '26px',
        'header-s': '18px',
        'body': '14px',
        'subtext': '11px',
        'subtext-2': '12px',
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
}

