import globals from 'globals';
import { base } from './base.js';

/** Base rules plus Node.js globals (process, __dirname, require, ...). */
export const node = [
  ...base,
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
];
