// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    // Allow usage of target="_blank" without rel="noreferrer"
    'react/jsx-no-target-blank': 'off',

    // Warn if components are not exported correctly with Fast Refresh
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // Optional: Common best practices
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
