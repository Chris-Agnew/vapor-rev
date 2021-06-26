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
        'light-blue': '#0A9DFF',
        'dark-blue': '#0A9DFF',
        'coral-red': '#E63946',
        'teal': '#0E7C7B',

        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
