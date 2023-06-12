import { createI18n } from 'vue-i18n';
import { pluralizationRules } from './pluralizationRules';
import en from './locales/en.json';
import ru from './locales/ru.json';

export type { Locale } from './types';
export { Translation } from './translation';
export const i18n = createI18n({
    legacy: false,
    locale: 'en',
    pluralRules: pluralizationRules,
    fallbackLocale: 'en',
    messages: {
        en,
        ru,
    },
});
