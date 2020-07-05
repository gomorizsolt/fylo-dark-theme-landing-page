module.exports = {
  purge: ["./index.html"],
  theme: {
    linearGradientColors: {
      "cyan-blue": ["hsl(176, 68%, 64%)", "hsl(198, 60%, 50%)"],
    },
    inset: (theme) => theme("margin"),
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        cyan: "hsl(176, 68%, 64%)",
        accent: {
          cyan: "hsl(176, 68%, 64%)",
          blue: "hsl(198, 60%, 50%)",
        },
      },
      backgroundColor: {
        header: "hsl(217, 28%, 15%)",
        main: "hsl(218, 28%, 13%)",
        footer: "hsl(216, 53%, 9%)",
        testimonial: "hsl(219, 30%, 18%)",
      },
      minHeight: {
        header: "95vh",
      },
      maxWidth: {
        wrapper: "1000px",
        hero: "600px",
        "testimonial-img": "25px",
        "contact-small": "90%",
        "contact-large": "700px",
      },
      fontSize: {
        "2xs": ".6rem",
      },
      inset: {
        22: "5.5rem",
      },
      boxShadow: {
        default:
          "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
      },
      gridTemplateColumns: {
        "testimonials-small": "repeat(auto-fit, 1fr)",
        "testimonials-large": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "open-sans": ['"Open Sans", "sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-gradients")],
};
