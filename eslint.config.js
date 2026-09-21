import { node } from './src/index.js';

export default [
  ...node,
  { ignores: ['node_modules/', 'coverage/'] },
];
