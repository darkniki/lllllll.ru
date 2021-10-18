module.exports = {
    extends: [
        'stylelint-config-airbnb',
    ],
    plugins: [
        'stylelint-order',
        'stylelint-scss',
    ],
    rules: {
        'max-nesting-depth': 4,
    },
};
