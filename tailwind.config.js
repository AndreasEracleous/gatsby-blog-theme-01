const colors = require("tailwindcss/colors")

module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./src/content/**/*.{md, mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    colors: {
      /* base colors */
      ...colors,
      blue: {
        500: "#0091ea",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
}
