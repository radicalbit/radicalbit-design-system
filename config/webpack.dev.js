const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    index: './src/lib/index.ts',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    chunkFilename: '[id][chunk].js',
  },
  devtool: 'eval-source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    compress: true,
    port: 3010,
    host: 'localhost',
  },
});
