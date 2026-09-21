import js from '@eslint/js';

/**
 * Base style rules shared by every other preset in this package.
 * Deliberately small: it only encodes opinions this package's author
 * actually wants enforced, not a copy of someone else's style guide.
 */
export const base = [
  js.configs.recommended,
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-console': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
