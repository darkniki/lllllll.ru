/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-airbnb',
        '@vue/eslint-config-typescript',
    ],
    rules: {
        'vue/html-indent': [2, 4],
        indent: [2, 4],
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'vue/multi-word-component-names': 'off',
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
};
