const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.current'),
            },
          },
        },
      }),
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#040709',
      black2: '#232321',
      white: '#ffffff',
      gray: colors.slate,
      primary: {
        DEFAULT: '#f79627',
        400: '#fabc69',
        600: '#f57c1b',
      },
      secondary: {
        DEFAULT: '#61473d',
        400: '#7e5a53',
        500: '#694b44',
        600: '#49332d',
      },
      tertiary: colors.emerald,
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
