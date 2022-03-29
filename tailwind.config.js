const defaultTheme = require('tailwindcss/defaultTheme');
const AspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*.html'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem'
      },
      colors: {
        'black': '#292929',
        'orange': '#ffa33d',
        'light-blue': '#15a1d4'
      },
      borderColor: '#333333',
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    // The aspect-{ratio} utilities use the native aspect-ratio CSS property, which was not supported in Safari until
    // version 15. Until Safari 15 is popularized, Tailwind’s aspect-ratio plugin is a good alternative.
    // Source: https://tailwindcss.com/docs/aspect-ratio
    AspectRatio
  ],
}
