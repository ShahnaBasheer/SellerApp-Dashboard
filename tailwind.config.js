/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        //black variations
        "black-60": "rgba(0, 0, 0, 0.6)",
        "black-16": "rgba(0, 0, 0, 0.16)",

        // Yellow and Orange
        yellow: "#FFD74B",
        "dark-yellow": "#E8B500",
        orange: "#FF9E2B",

        // Red Variations
        "light-red": "#FDD5DA",
        "dark-red": "#FF5E75",

        // Green Variations
        "light-green": "#B8E9D4",
        "dark-green": "#2CC483",

        // Blue Variations
        blue: "#696FFB",
        "blue-60": "rgba(105, 111, 251, 0.6)", // 60% opacity
        "blue-32": "rgba(105, 111, 251, 0.32)", // 32% opacity
        "blue-20": "rgba(105, 111, 251, 0.2)", // 20% opacity
        "blue-12": "rgba(105, 111, 251, 0.12)", // 12% opacity
        "blue-8": "rgba(105, 111, 251, 0.08)", // 8% opacity
        "blue-4": "rgba(105, 111, 251, 0.04)", // 4% opacity
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "header-xl": "34px",
        "header-l": "26px",
        "header-s": "18px",
        body: "14px",
        subtext: "11px",
        "subtext-2": "12px",
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
