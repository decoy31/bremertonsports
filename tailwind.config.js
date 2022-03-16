//const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      'black': '#292929',
      'orange': '#ffa33d',
      'light-blue': '#15a1d4'
    },
    extend: {},
  },
  plugins: [
    // The aspect-{ratio} utilities use the native aspect-ratio CSS property, which was not supported in Safari until
    // version 15. Until Safari 15 is popularized, Tailwind’s aspect-ratio plugin is a good alternative.
    // Source: https://tailwindcss.com/docs/aspect-ratio
    require('@tailwindcss/aspect-ratio')
  ],
}
