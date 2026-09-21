import globals from 'globals';
import { base } from './base.js';

/** Base rules plus browser globals (window, document, fetch, ...). */
export const browser = [
  ...base,
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
];
