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

  // The bare names alone are not enough: antd v6 pulls in `@rc-component/util`,
  // which imports `react-dom/client`. A subpath does not match an exact-name
  // external, so react-dom would be compiled INTO the bundle and the consuming
  // app would end up running two copies of it (breaking on the shared
  // internals, e.g. `ReactSharedInternals.S`). Keep the subpaths external too.
  externals: [
    {
      react: 'react',
      'react-dom': 'react-dom',
    },
    /^react\/.+$/,
    /^react-dom\/.+$/,
  ],
  
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        // `config/` holds build-time helpers (e.g. the style-loader `insert`
        // module). They are outside `rootDir`, so letting ts-loader pick them
        // up as root files breaks the declaration emit with TS6059.
        exclude: [/node_modules/, path.resolve(__dirname)],
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
