import { configs, plugins } from 'eslint-config-airbnb-extended';
import storybook from 'eslint-plugin-storybook';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// Migrated from .eslintrc.js when ESLint moved to flat config (v9).
// ESM (.mjs) is required: eslint-config-airbnb-extended ships ESM only, and
// require()-ing it breaks on Node < 20 — which is what the VS Code ESLint
// extension runs on.
// The airbnb base is now eslint-config-airbnb-extended: eslint-config-airbnb
// stopped at ESLint 8 and has no ESLint 9+ successor.
//
// Note on rule prefixes: the airbnb-extended stack uses eslint-plugin-import-x
// rather than eslint-plugin-import, so the former `import/*` overrides are
// spelled `import-x/*` here.
export default [
  {
    // Replaces .eslintignore, which flat config no longer reads.
    ignores: [
      'dist/**',
      'coverage/**',
      'docs/build/**',
      'flow-typed/**',
      'node_modules/**',
      'src/demo/**',
      'demo/**',
      'Dockerfile',
      'Jenkinsfile',
      'build.sh',
      'default.conf',
      'jsConfig.json',
    ],
  },

  // The airbnb-extended configs carry rules but register no plugins, so the
  // plugin blocks have to be spread in first. `next` is not applicable here,
  // and `node` is left out on purpose: no n/* rule is enabled, and
  // eslint-plugin-n uses `import ... with { type: 'json' }`, which the Node 18
  // that the VS Code ESLint extension runs on cannot parse.
  plugins.stylistic,
  plugins.importX,
  plugins.react,
  plugins.reactA11y,
  plugins.reactHooks,
  plugins.typescriptEslint,

  ...configs.base.all,
  ...configs.react.all,
  ...storybook.configs['flat/recommended'],

  {
    name: 'rbit/language-options',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },

  {
    name: 'rbit/rules',
    rules: {
      // --- core ---
      'no-console': 0,
      'no-bitwise': ['error', { int32Hint: true }],
      'no-use-before-define': 0,
      'no-param-reassign': 0,
      'no-shadow': 0,

      // The TS-aware variants of the two rules disabled just above. They are
      // separate rules, so the core `0` does not cover them: without these the
      // codebase-wide "export first, helpers below" layout would error.
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/no-shadow': 0,

      // New in import-x (no equivalent in eslint-plugin-import). It flags
      // deliberate renames such as ChatMessage -> Message on import.
      'import-x/no-rename-default': 0,
      'func-names': 0,
      'require-yield': 0,
      'no-else-return': 0,
      'no-confusing-arrow': 0,
      'class-methods-use-this': 0,
      'no-nested-ternary': 0,
      'prefer-template': 2,

      // --- import-x (was import/* under eslint-plugin-import) ---
      'import-x/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import-x/first': 0,
      'import-x/newline-after-import': 0,
      'import-x/no-dynamic-require': 0,
      'import-x/no-extraneous-dependencies': 0,
      'import-x/no-named-as-default': 0,
      'import-x/no-unresolved': 2,
      'import-x/no-webpack-loader-syntax': 0,
      'import-x/prefer-default-export': 0,
      'import-x/no-cycle': 2,

      // --- jsx-a11y ---
      'jsx-a11y/aria-props': 2,
      'jsx-a11y/heading-has-content': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'jsx-a11y/label-has-for': 2,
      'jsx-a11y/mouse-events-have-key-events': 2,
      'jsx-a11y/role-has-required-aria-props': 2,
      'jsx-a11y/role-supports-aria-props': 2,

      // --- react ---
      'react/jsx-first-prop-new-line': [2, 'multiline'],
      'react/jsx-filename-extension': 0,
      'react/jsx-no-target-blank': 0,
      'react/require-default-props': 0,
      'react/forbid-prop-types': 0,
      'react/prop-types': 0,
      'react/self-closing-comp': 0,
      'react/no-array-index-key': 0,
      'react/no-unused-prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/no-did-mount-set-state': 0,
      'react/destructuring-assignment': 0,
      'react/jsx-props-no-spreading': 0,
      'react/static-property-placement': 2,
      // antd takes render props such as Select's
      // `dropdownRender: (menu: ReactElement) => ReactElement`. Those are not
      // nested component definitions, which is what the rule is really after.
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
      'react-hooks/exhaustive-deps': 1,

      // Both rules judge from the types as they resolve today and their
      // autofix silently drops casts that are there on purpose — e.g. the
      // `faReply as IconDefinition` cast guarding against mismatched
      // fontawesome IconDefinition types, which has a comment saying so.
      '@typescript-eslint/no-unnecessary-type-assertion': 0,
      '@typescript-eslint/no-unnecessary-type-arguments': 0,

      // --- storybook ---
      // The rule wants stories to import from @storybook/react-webpack5, but
      // that package exposes its types through an `exports` map only, which
      // needs moduleResolution node16/nodenext/bundler. This project is on
      // moduleResolution "node", so switching the imports would break the
      // type check on every story. Revisit together with the tsconfig
      // module-resolution bump.
      'storybook/no-renderer-packages': 0,

      // --- stylistic ---
      // Formatting rules moved to @stylistic/* in the airbnb-extended stack.
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/max-len': 0,
      '@stylistic/comma-dangle': [2, 'always-multiline'],
      '@stylistic/no-trailing-spaces': [2, { skipBlankLines: true }],
      '@stylistic/indent': [2, 2, { SwitchCase: 1 }],
      '@stylistic/newline-per-chained-call': 0,
      'arrow-body-style': [2, 'as-needed'],
    },
  },

  {
    // Build/tooling files at the repo root. They are CommonJS and sit outside
    // the tsconfig project, so the type-aware rules cannot parse them.
    name: 'rbit/tooling-files',
    files: ['*.js', '*.cjs', '*.mjs', '*.ts', '.storybook/**', 'config/**'],
    ...tseslint.configs.disableTypeChecked,
    languageOptions: {
      ...tseslint.configs.disableTypeChecked.languageOptions,
      globals: { ...globals.node },
    },
    rules: {
      ...tseslint.configs.disableTypeChecked.rules,
      'import-x/no-import-module-exports': 0,
      '@typescript-eslint/no-require-imports': 0,
    },
  },

  {
    // Orphaned react-styleguidist config: superseded by Storybook and no
    // longer referenced from package.json.
    ignores: ['styleguide.config.js'],
  },

  // Keep last: turns off every formatting rule that would fight Prettier.
  prettierConfig,
];
