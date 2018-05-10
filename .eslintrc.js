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
    'no-use-before-define': 'warn'
  },
  extends: 'airbnb-base'
};
