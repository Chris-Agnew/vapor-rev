module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "light-blue": "#0A9DFF",
        "dark-blue": "#003459",
        "rose-red": "#C2095A",
        mandarin: "EF8354",
        "dark-red": "8D0801",
        "vapor-rev ": "#4C83C4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
