// config-overrides.js
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    // This maps the '@/*' path alias to the './src' directory
    '@': path.resolve(__dirname, 'src')
  })
);