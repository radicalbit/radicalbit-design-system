/* eslint-disable @typescript-eslint/no-var-requires */
const postcssCustomProperties = require('postcss-custom-properties');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssCustomProperties,
    autoprefixer,
  ],
};
