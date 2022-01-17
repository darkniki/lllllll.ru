export const getPluralForm = (count, titles) => {
    if (!Array.isArray(titles)) {
        // eslint-disable-next-line no-console
        return console.error('Function getPluralForm: argument titles is not array!');
    }

    return titles[(count != 1) ? 1 : 0];
};
