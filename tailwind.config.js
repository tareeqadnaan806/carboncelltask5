/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { min: "800px" },
      md: { max: "776px" },
      sm: { max: "800px" },
    },
  },
  plugins: [],
};
