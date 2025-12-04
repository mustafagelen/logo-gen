const colors = require('./colors.json');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '32px' }],
        '2xl': ['24px', { lineHeight: '36px' }],
        '3xl': ['30px', { lineHeight: '44px' }],
        '4xl': ['36px', { lineHeight: '52px' }],
        '5xl': ['48px', { lineHeight: '64px' }],
        '6xl': ['64px', { lineHeight: '80px' }],
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
};
