/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  
  entry: {
    index: './src/index.ts',
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    library: 'rbit-design-system',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true,
  },

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader', {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.webpack.json',
          },
        }],
        
      },
    ],
  },
  
});
