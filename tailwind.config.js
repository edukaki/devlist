/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#424040',
        lightGray: '#F7F7F7',
        white: '#FFFFFF',
        orange: '#FFA500',
        blue: '#009EFF',
        green: '#69B848',
      }
    },
    fontFamily: {
      courier: ["Courier Prime", "monospace"],
      roboto: ["Roboto", "sans-serif"],
    }
  },
  plugins: [],
}
