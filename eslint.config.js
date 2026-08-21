const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      // CommonJS のコードだが sourceType は module のままにする。commonjs にすると
      // strict ルールの "function" が「関数内に 'use strict' を書く」要求に変わり、
      // lib と test の全ファイルが違反になる。
      sourceType: 'module',
      globals: {
        ...globals.commonjs,
        ...globals.node,
        ...globals.mocha,
      },
    },
    rules: {
      strict: ['error', 'function'],
      curly: 'error',
      eqeqeq: 'error',
      'wrap-iife': ['error', 'any'],
      'no-use-before-define': ['error', { functions: false }],
      'new-cap': 'error',
      'no-caller': 'error',
      'dot-notation': 'off',
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-cond-assign': ['error', 'except-parens'],
      'no-eq-null': 'error',
    },
  },
];
