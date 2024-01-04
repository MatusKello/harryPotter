module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2], // Set your preferred indentation (e.g., 2 spaces)
    quotes: ['error', 'single'], // Prefer single quotes
    semi: ['error', 'always'], // Enforce semicolons at the end of statements
    'no-var': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-fragments': 'error',
    'react/jsx-no-undef': 'error',
    'react/prop-types': 0,
  },
};
