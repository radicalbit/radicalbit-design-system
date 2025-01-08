const postcssCustomProperties = require('postcss-custom-properties');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssCustomProperties,
    autoprefixer,
  ],
};
