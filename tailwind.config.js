module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '750px'},
      'md': {'max': '1000px'},
      'lg': {'max': '1279px'},
      'xl': {'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


