/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        // heebo: ["Heebo", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        // reenie: ["Reenie Beanie", "cursive"],
        // aurore: ["La Belle Aurore", "cursive"],
        // comfortaa: ["Comfortaa", "cursive"],
        // roboto: ["Roboto Mono", "monospace"],
        // baloo: ["Baloo Bhaijaan 2", "cursive"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("preline/plugin")],
};
