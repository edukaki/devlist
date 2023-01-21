/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#424040',
        lightGray: '#F5F5F5',
        logoGray: '#D9D9D9',
        grayish: '#E9EDF1',
        white: '#FFFFFF',
        orange: '#FFA500',
        lightOrange: '#FFBD59',
        blue: '#009EFF',
        green: '#69B848',
      },
      backgroundImage: {
        "heroImg-bigger": "url('/public/img/home/hero-img-bigger.png')",
        "heroImg-desktop": "url('/public/img/home/hero-img-desktop.png')",
        "heroImg-mobile": "url('/public/img/home/hero-img-mobile.png')",
        signinImg: "url('/public/img/signin/fun-bg.png')"
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
