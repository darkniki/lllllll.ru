<template>
    <div class="language-switcher-locales">
        <ul class="language-switcher-locales__list">
            <li
                class="language-switcher-locales__item"
                v-for="(lang, i) in filteredLanguages"
                :key="`lang-${i}`"
            >
                <button
                    type="button"
                    class="language-switcher-locales__item--btn"
                    @click.prevent="switchLanguage(lang as Locale)"
                >
                    {{ locale }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import type { Locale } from '@/shared/config/i18n';
import { Translation } from '@/shared/config/i18n';

const { locale, availableLocales } = useI18n();
const router = useRouter();
const filteredLanguages = computed(() => availableLocales.filter((lng) => lng !== locale.value));
const switchLanguage = async (newLocale: Locale) => {
    Translation.switchLanguage(newLocale);
    await router.push(
        { path: `/${newLocale}` },
    );
};
</script>
<style scoped lang="scss">
@import "./LanguageSwitcher";
</style>
