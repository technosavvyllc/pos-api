// @ts-check
import globals from 'globals';

export default {
  ignores: ['eslint.config.mjs'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Prettier config
    'plugin:@typescript-eslint/recommended', // TypeScript rules
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Update ECMAScript version
    sourceType: 'module',
    project: './tsconfig.json', // Adjust according to your setup
  },
  plugins: [
    '@typescript-eslint', // Enable TypeScript plugin
    'prettier', // Enable Prettier plugin
  ],
  env: {
    node: true,
    jest: true,
    es2020: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'warn', // Adjust based on your preference
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/explicit-function-return-type': ['warn'],
  },
  globals: {
    ...globals.node,
    ...globals.jest,
  },
};
