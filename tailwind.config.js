module.exports = {
    mode: "jit",
    purge: ["./content/**/*.md", "./content/**/*.html", "./themes/hugo-theme-windy/layouts/**/*.html"],

    theme: {
      extend: {
        colors: {
          'accent': '#fc4041',
        }
      }
    },

    plugins: [
      require('@tailwindcss/typography'),
    ],
  };