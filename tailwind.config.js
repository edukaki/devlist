/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#424040',
        lightGray: '#F0F2F4',
        grayish: '#E9EDF1',
        white: '#FFFFFF',
        orange: '#FFA500',
        blue: '#009EFF',
        green: '#69B848',
      }
    },
    fontFamily: {
      courier: ["Courier Prime", "monospace"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
