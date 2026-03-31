module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-new': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'class-methods-use-this': 'off'
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
