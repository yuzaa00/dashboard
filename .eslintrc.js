module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: { version: 'detect' },
  },
  rules: {
    'no-console': 'error',
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      },
    ],
  },
};
