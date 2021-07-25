module.exports = {
    mode: "jit",
    darkMode: 'class',
    purge: ["./content/**/*.md", "./content/**/*.html", "./themes/hugo-theme-windy/layouts/**/*.html"],

    theme: {
      scale: {
        '200': '2',
        '300': '3',
      },
      extend: {
        colors: {
          'accent': '#fc4041',
          'blackGradient': 'rgb(0,0,0,.7)',
        },
        typography: {
          DEFAULT: {
            css: {
              a: {
                boxShadow: 'inset 0 0.8em 0 0 #fff, inset 0 -0.375em 0 0 rgb(252 64 65 / 40%)',
                textDecoration: 'none',
                color: '#fc4041',
                margin: '0 .2rem',
              },
              section: {
                a: {
                  boxShadow: 'none',
                }
              },
              sup: {
                a: {
                  color: '#333',
                  boxShadow: 'none',
                }
              },
              figure: {
                marginTop: '3rem',
              },
              img: {
                margin: '0 auto',
                display: 'block',
                maxWidth: '95%',
                borderRadius: '4px',
                boxShadow: '0 0 8px rgb(0 0 0 / 10%)',
              },
              figcaption: {
                textAlign: 'center',
                marginBottom: '50px',
                h4: {
                  fontWeight: '400',
                  color: '#999',
                }
              }
            }
          }
        },
      }
    },

    plugins: [
      require('@tailwindcss/typography'),
    ],
  };