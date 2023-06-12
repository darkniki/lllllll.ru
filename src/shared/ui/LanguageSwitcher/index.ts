import { defineAsyncComponent } from 'vue';

export const LanguageSwitcher = defineAsyncComponent(
    () => import('./ui/LanguageSwitcher.vue'),
);
