module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'preact',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    react: {
      pragma: 'h', // Preact's pragma
      version: '17.0', // Or "18.0" - a version React-like linters understand for API surface
    },
  },
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
    'react/prop-types': 'off', // Not using prop-types with Preact/TypeScript
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off', // Use @typescript-eslint/no-unused-vars instead
    '@typescript-eslint/no-explicit-any': 'warn' // Good to add for TS projects
  },
  ignorePatterns: ['dist/', 'node_modules/', 'vite.config.js', '.eslintrc.cjs'],
};
