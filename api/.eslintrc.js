module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'linebreak-style': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    semi: ['error', 'always'],
  },
};
