module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito' :['Nunito']
      },
      textColor: {
        'primary': '#63B5E3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
