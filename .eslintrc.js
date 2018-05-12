module.exports = {
  plugins: ['jasmine'],
  env: {
    jasmine: true
  },
  globals: {
    when: true,
    and: true,
    nenaner: true,
    vendingMachine: true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-use-before-define': 'warn',
    'no-undef': 'warn',
    'arrow-parens': 'off',
    'no-use-before-define': 'off'
  },
  extends: 'airbnb-base'
};
