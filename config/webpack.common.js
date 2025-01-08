const path = require('path');
const { ProvidePlugin } = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new ESLintPlugin({
      formatter: eslintFormatter,
      eslintPath: require.resolve('eslint'),
    }),
    new WebpackNotifierPlugin({
      title: 'Radicalbit | Design System',
      contentImage: path.join(
        __dirname,
        './src/lib/resources/images/products/RNA-orizz-posi.png'
      ),
    }),
    new CopyWebpackPlugin([
      { from: './src/lib/resources/images/icons/rna-favicon.ico' },
    ]),
    new CleanWebpackPlugin(),
    new ProvidePlugin({
      React: 'react',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',
            ],
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            plugins: [
              'react-hot-loader/babel',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: function insertAtTop(element) {
                const parent = document.querySelector('head');
                // eslint-disable-next-line no-underscore-dangle
                const lastInsertedElement = window._lastElementInsertedByStyleLoader;

                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild);
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling);
                } else {
                  parent.appendChild(element);
                }

                // eslint-disable-next-line no-underscore-dangle
                window._lastElementInsertedByStyleLoader = element;
              },
            },
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                paths: [
                  path.resolve(__dirname, './node_modules'),
                  path.resolve('./src/lib/components'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@Src': path.resolve(__dirname, '../src/'),
      '@Resources': path.resolve(__dirname, '../src/lib/resources/'),
      '@Lib': path.resolve(__dirname, '../src/lib/'),
      '@Components': path.resolve(__dirname, '../src/lib/components/'),
      '@Demo': path.resolve(__dirname, '../src/demo/'),
      '@Styles': path.resolve(__dirname, '../src/styles/'),
      '@Images': path.resolve(__dirname, '../src/lib/resources/images/'),
    },
    extensions: ['.js', '.json', '.ts', '.tsx', '.jpg'],
  },
};
