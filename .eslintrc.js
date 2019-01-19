module.exports = {
  extends: 'airbnb-base',
  parser: "babel-eslint",
  env: {
    "browser": true,
    "node": true
  },
  parserOptions: {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  rules: {
    // error
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true
    }],
    quotes: ['error', 'single', {
      allowTemplateLiterals: true
    }],
    // warn
    'import/first': 'warn',
    'spaced-comment': 'warn',
    'camelcase': 'warn',
    'max-len': ['warn', {
      code: 150
    }],
    'operator-assignment': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-template': 'warn',
    'eol-last': 'warn',
    'object-curly-spacing': 'warn',
    'no-return-assign': 'warn',
    // off
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'off',
    'no-restricted-syntax': 'off',
    'radix': 'off',
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'arrow-parens': 'off'
  },
};