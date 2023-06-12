import type { NavigationGuard } from 'vue-router';

export type Locale = 'en' | 'ru';
export interface ITranslation {
    defaultLocale: Locale;
    currentLocale: Locale;
    guessDefaultLocale: () => Locale;
    getPersistedLocale: () => Locale | null;
    supportedLocales: string[];
    isLocaleSupported: (locale: any) => locale is Locale;
    routeMiddleware: NavigationGuard;
    switchLanguage: (locale: Locale) => void;
    getUserLocale: () => {
        locale?: string,
        localeNoRegion?: string,
    };
}
