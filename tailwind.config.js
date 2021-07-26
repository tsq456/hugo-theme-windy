module.exports = {
    mode: "jit",
    darkMode: 'class',
    purge: ["./content/**/*.md", "./content/**/*.html", "./themes/hugo-theme-windy/layouts/**/*.html"],

    theme: {
      scale: {
        '200': '2',
        '300': '3',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'nav': 'inset 0 1rem 0 0 #fff, inset 0 -2rem 0 0 rgb(252 64 65 / 40%)',
        'bg': '0 0 10px rgb(0 0 0 / 10%)',
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
                '&:hover': {
                  boxShadow: 'inset 0 .8em 0 0 #fff, inset 0 -0.375em 0 0 rgb(252 64 65 / 40%)',
                  transition: 'all .2s ease-out',
                  color: '#fc4041',
                },
                boxShadow: 'inset 0 1em 0 0 #fff, inset 0 -0.375em 0 0 rgb(252 64 65 / 40%)',
                transition: 'all .2s ease-out',
                textDecoration: 'none',
                color: '#33333',
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