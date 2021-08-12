module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      spacing: {
        '112': '28rem'
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'tg-dark': {
          DEFAULT: '#002140',
        },
        'tg-blue': {
          DEFAULT: '#0063bf',
          darker: '#003b73',
          10: '#e6edf4',
          20: '#d2e0ed',
          30: '#bdd3e6',
          40: '#a9c7e0',
          50: '#94bcda',
          60: '#81b2d4',
          70: '#6da8ce',
          80: '#569fc9',
          90: '#3b97c4',
        },
        'tg-pink': {
          DEFAULT: '#dd4599',
          darker: '#912d64',
          10: '#f9eef5',
          20: '#fbebf7',
          30: '#fae1f4',
          40: '#f8d8f0',
          50: '#f6ceec',
          60: '#f5c4e9',
          70: '#f3bae5',
          80: '#f1b1e1',
          90: '#f0a7de',
        },
        'gray': {
          150: '#eceef1'
        }
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['focus']
    },
  },
  plugins: [],
}
