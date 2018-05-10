module.exports = {
  plugins: ['jasmine'],
  env: {
    jasmine: true
  },
  globals: {
    when: true,
    and: true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-use-before-define': 'warn',
    'no-undef': 'warn'
  },
  extends: 'airbnb-base'
};
