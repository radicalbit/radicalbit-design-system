/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
          test: /\.(less)$/,
          sideEffects: true,
          use: [
            require.resolve("style-loader"),
            {
              loader: require.resolve("css-loader"),
              options: {},
            },
            {
              loader: require.resolve("less-loader"),
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
        },],
      }
    }),
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {},
    },
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => prop.name.includes('aria') ? false : true,
    },
  },

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@Src': path.resolve(__dirname, '../src/'),
      '@Resources': path.resolve(__dirname, '../src/lib/resources/'),
      '@Lib': path.resolve(__dirname, '../src/lib/'),
      '@Components': path.resolve(__dirname, '../src/lib/components/'),
      '@Demo': path.resolve(__dirname, '../src/demo/'),
      '@Styles': path.resolve(__dirname, '../src/styles/'),
      '@Images': path.resolve(__dirname, '../src/lib/resources/images/'),
    };

    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;  

    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/, // *.svg?url
    });
    

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      use: ['@svgr/webpack'],
    });

    return config;
  },
  
  docs: {},
};

export default config;
