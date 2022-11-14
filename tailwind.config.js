/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', './**/*.hbs'],
  theme: {
    extend: {},
  }, variants: {
    display: ['responsive', 'focus', 'dropdown']
  },
  plugins: [require('@tailwindcss/forms')],
};

