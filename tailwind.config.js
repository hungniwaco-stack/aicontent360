/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          500: "#4f46e5",
          700: "#1d2f8a",
          900: "#0b1229"
        }
      }
    }
  },
  plugins: []
};
