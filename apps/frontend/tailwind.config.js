const {createGlobPatternsForDependencies} = require('@nrwl/react/tailwind');
const {join} = require('path');

module.exports = {
  content: [
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "128px",
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero.jpg')"
      }
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
}
