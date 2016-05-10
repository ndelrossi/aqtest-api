module.exports = {
  baseURL: process.env.BASE_URL || 'http://www.wikipedia.org',
  testName: 'aqtest - ' + new Date().toString(),
  host: '127.0.0.1',
  port: 4444,
  featuresPath: 'features',

  // Browser specifications
  browser: {
    name: 'firefox',
    version: '',
    platform: ''
  },

  // SauceLabs creds
  saucelabs: {
    username: 'acquia',
    key: process.env.SAUCE_KEY
  }
};
