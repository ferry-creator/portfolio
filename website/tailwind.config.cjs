const colors = require('./src/theme/colors.cjs')
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors,
    extend: {

    },
  },

  plugins: [],
};

module.exports = config;
