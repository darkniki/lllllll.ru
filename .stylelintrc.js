module.exports = {
    extends: [
        'stylelint-config-standard',
    ],
    plugins: [
        'stylelint-order',
        'stylelint-scss',
    ],
    rules: {
        'max-nesting-depth': 4,
    },
};
