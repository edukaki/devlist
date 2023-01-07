/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'larger': '768px'
    },
    extend: {},
    fontFamily: {
      courier: ["Courier Prime", "monospace"],
      roboto: ["Roboto", "sans-serif"],
    }
  },
  plugins: [],
}
