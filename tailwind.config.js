/* eslint-disable import/no-extraneous-dependencies, global-require */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/posts/*.{md, mdx}',
    './src/posts/**/*.{md, mdx}',
    './src/posts/**/**/*.{md, mdx}',
    './src/posts/**/**/**/*.{md, mdx}',
  ],
  corePlugins: {
    preflight: true,
    // container: false,
  },
  theme: {
    // TODO: Uncomment this part of the code and the import of "defaultTheme" above, and complete TODOs
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      '2xl': { max: '1320px' },
      xl: { max: '1140px' },
      lg: { max: '960px' },
      md: { max: '720px' },
      sm: { max: '540px' },
      xs: { max: '359px' },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-safe-area')],
};
