export default [
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
  },
];
