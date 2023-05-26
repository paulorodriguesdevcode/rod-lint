module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'semi': ['error', 'always'],
  },
  extends: [
    'eslint:recommended',
  ],
  plugins: [],
  settings: {},
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
  ],
};