module.exports = {
  plugins: ['jasmine'],
  env: {
    jasmine: true
  },
  rules: {
    'comma-dangle': ['error', 'never']
  },
  extends: 'airbnb-base'
};
