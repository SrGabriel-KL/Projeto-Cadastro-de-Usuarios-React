/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "backdrop-blur-md",
    "backdrop-blur-lg",
    "bg-white/20",
    "bg-black/40",
    "bg-black/20",
    "shadow-lg",
    "shadow-xl"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}