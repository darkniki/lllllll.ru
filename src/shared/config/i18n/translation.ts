import { i18n } from '.';
import type { ITranslation, Locale } from '@/shared/config/i18n/types';

export const Translation: ITranslation = {
    get defaultLocale() {
        return import.meta.env.VITE_DEFAULT_LOCALE;
    },

    guessDefaultLocale() {
        const userPersistedLocale = Translation.getPersistedLocale();
        if (userPersistedLocale) return userPersistedLocale;
        const userPreferredLocale = Translation.getUserLocale();
        if (Translation.isLocaleSupported(userPreferredLocale.locale)) {
            return userPreferredLocale.locale;
        }
        if (Translation.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
            return userPreferredLocale.localeNoRegion;
        }

        return Translation.defaultLocale;
    },

    isLocaleSupported(locale): locale is Locale {
        return Translation.supportedLocales.includes(locale as Locale);
    },

    getUserLocale() { // <--- 2
        const locale = window.navigator.language || Translation.defaultLocale;
        return {
            locale: locale ?? null,
            localeNoRegion: locale.split('-')[0] ?? null,
        };
    },

    get supportedLocales() {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(',');
    },

    set currentLocale(newLocale: Locale) {
        i18n.global.locale.value = newLocale;
    },

    switchLanguage(newLocale: Locale) {
        Translation.currentLocale = newLocale;
        document.querySelector('html')
            ?.setAttribute('lang', newLocale);
        localStorage.setItem('user-locale', newLocale);
    },

    getPersistedLocale() {
        const persistedLocale = localStorage.getItem('user-locale');
        if (Translation.isLocaleSupported(persistedLocale)) {
            return persistedLocale;
        }
        return null;
    },

    routeMiddleware(to, _from, next) {
        const paramLocale = to.params.locale;

        if (Translation.isLocaleSupported(paramLocale)) {
            Translation.switchLanguage(paramLocale);

            return next();
        }
        return next(Translation.guessDefaultLocale());
    },
};
