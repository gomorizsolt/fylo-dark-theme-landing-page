module.exports = {
  purge: ["./index.html"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
      },
      backgroundColor: {
        header: "hsl(217, 28%, 15%)",
        main: "hsl(218, 28%, 13%)",
        footer: "hsl(219, 30%, 18%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "open-sans": ['"Open Sans", "sans-serif'],
      },
      minHeight: {
        header: "95vh",
      },
    },
  },
  variants: {},
  plugins: [],
};
