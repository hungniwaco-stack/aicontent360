/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Hệ "giấy ấm + mực ấm + vermilion"
        brand: {
          50: "#F7EFEA",   // tint vermilion nhạt
          500: "#E85C3A",  // vermilion sáng (hover/accent nền tối)
          700: "#C2381E",  // vermilion sâu — accent chính (link, nút)
          900: "#17150F"   // mực ấm — khối tối, tiêu đề
        },
        paper: "#FBFAF6",  // giấy ấm — nền
        ink: "#211C15"     // mực ấm — chữ thân
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      }
    }
  },
  plugins: []
};
