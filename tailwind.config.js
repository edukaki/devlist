/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'larger': '768px'
    },
    colors: {
      darkGray: '#424040',
      orange: '#FFA500',
      blue: '#009EFF',
      green: '#69B848',
    },
    extend: {},
    fontFamily: {
      courier: ["Courier Prime", "monospace"],
      roboto: ["Roboto", "sans-serif"],
    }
  },
  plugins: [],
}
