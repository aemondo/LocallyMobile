module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'jsx-quotes': 0,
      },
    },
  ],
  rules: {
    'react-native/no-inline-styles': [0],
    'no-shadow': [0],
    '@typescript-eslint/no-empty-function': [0],
  },
};
