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
    'comma-dangle': ['error', 'never']
  },
  extends: 'airbnb-base'
};
