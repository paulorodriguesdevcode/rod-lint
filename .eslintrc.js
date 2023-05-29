module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "indent": ["error", 2],
    "no-console": "off"
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