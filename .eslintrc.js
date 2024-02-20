module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
      'vue/setup-compiler-macros': true,
   },
   extends: [
      'plugin:vue/vue3-recommended',
      'plugin:nuxt/recommended',
      'eslint:recommended',
      'airbnb',
   ],
   parser: 'vue-eslint-parser',
   parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
   },
   plugins: [
      'vue',
   ],
   rules: {
      'vue/script-setup-uses-vars': 'error',
      'max-len': 0,
      'vue/max-len': 0,
      'no-undef': 0,
      'import/no-unresolved': 0,
      'vue/multi-word-component-names': 0,
      'vue/html-indent': 0,
      'import/prefer-default-export': 0,
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
   },
   settings: {
      'import/resolver': {
         nuxt: {
            extensions: ['.js', '.vue', '.jsx', '.ts', '.tsx'],
         },
      },
   },
};