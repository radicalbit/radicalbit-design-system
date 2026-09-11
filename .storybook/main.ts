/** @type { import('@storybook/react-webpack5').StorybookConfig } */

import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to a file path
const filename = fileURLToPath(import.meta.url);
// Get directory name like __dirname
const dirname = path.dirname(filename);

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
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
      propFilter: (prop) => !prop.name.includes('aria'),
    },
  },

  webpackFinal: async (config) => {
    // webpack 5.110 turns on experiments.typescript, which handles .ts but
    // not .tsx/JSX and grabs the files before swc-loader sees them. Every
    // story here is .tsx, so it has to be off.
    config.experiments = { ...config.experiments, typescript: false };

    // With experiments.typescript off nothing compiles .ts/.tsx any more:
    // the builder relied on it. babel-loader is already what the library
    // build uses for these files, and @swc/core is not even installed.
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader' }],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@Src': path.resolve(dirname, '../src/'),
      '@Resources': path.resolve(dirname, '../src/lib/resources/'),
      '@Lib': path.resolve(dirname, '../src/lib/'),
      '@Components': path.resolve(dirname, '../src/lib/components/'),
      '@Demo': path.resolve(dirname, '../src/demo/'),
      '@Styles': path.resolve(dirname, '../src/styles/'),
      '@Images': path.resolve(dirname, '../src/lib/resources/images/'),
    };

    // Was handled by @storybook/addon-styling-webpack, which supports
    // storybook <= 10.4 and replaces the builder's own style rules.
    config.module.rules.push({
      test: /\.less$/,
      sideEffects: true,
      use: [
        'style-loader',
        { loader: 'css-loader', options: {} },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
              paths: [
                path.resolve(dirname, './node_modules'),
                path.resolve('./src/lib/components'),
              ],
            },
          },
        },
      ],
    });

    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
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
  
  core: {
    disableTelemetry: true,
  },
  
  docs: {
    autodocs: 'tag',
  },
};

export default config;
