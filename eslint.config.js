const jsxA11Y = require('eslint-plugin-jsx-a11y');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');

const {
  fixupPluginRules,
} = require('@eslint/compat');

const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');

const {
  FlatCompat,
} = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [{
  ignores: [
    '**/Dockerfile',
    '**/Jenkinsfile',
    '**/build.sh',
    '**/default.conf',
    'src/demo/*',
    'demo/*',
    '!demo/partials/',
    '**/dist',
    '**/dist-npm',
    '**/flow-typed',
    '**/jsConfig.json',
    '**/node_modules',
    '**/readme.md',
    '**/package-lock.json',
    '**/package.json',
    '**/yarn.lock',
    'docs/build',
  ],
}, ...compat.extends(
  'airbnb',
  'plugin:storybook/recommended',
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended'
), {
  plugins: {
    'jsx-a11y': jsxA11Y,
    react,
    'react-hooks': fixupPluginRules(reactHooks),
    '@typescript-eslint': typescriptEslint,
  },

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.jest,
    },

    parser: tsParser,
    ecmaVersion: 6,
    sourceType: 'module',

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.common',
      },
    },
  },

  rules: {
    // START - Added with eslint 9.9.1
    'import/no-mutable-exports': 'off',
    'import/no-amd': 'off',
    'import/no-named-as-default-member': 'off',
    // END-*****
    '@typescript-eslint/no-var-requires': 'off',
    'storybook/no-uninstalled-addons': 'off',
    'storybook/hierarchy-separator': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'storybook/prefer-pascal-case': 'off',
    'storybook/story-exports': 'off',
    // 'react-hooks/exhaustive-deps':'off',
    'no-console': 0,

    'no-bitwise': ['error', {
      int32Hint: true,
    }],

    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'func-names': 0,
    'require-yield': 0,
    'no-else-return': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'max-len': 0,
    'comma-dangle': [2, 'always-multiline'],
    'no-nested-ternary': 0,

    'no-trailing-spaces': [2, {
      skipBlankLines: true,
    }],

    indent: [2, 2, {
      SwitchCase: 1,
    }],

    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],

    'prefer-template': 2,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    'react/no-array-index-key': 0,
    'react/no-unused-prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-did-mount-set-state': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-cycle': 2,
    'react/static-property-placement': 2,
  },
}];
