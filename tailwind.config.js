module.exports = {
  purge: ["./index.html"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        cyan: "hsl(176, 68%, 64%)",
      },
      backgroundColor: {
        header: "hsl(217, 28%, 15%)",
        main: "hsl(218, 28%, 13%)",
        footer: "hsl(216, 53%, 9%)",
        testimonial: "hsl(219, 30%, 18%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "open-sans": ['"Open Sans", "sans-serif'],
      },
      minHeight: {
        header: "95vh",
      },
      maxWidth: {
        wrapper: "1000px",
      },
      fontSize: {
        "2xs": ".6rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
