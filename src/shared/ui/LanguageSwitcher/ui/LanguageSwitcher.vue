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
import { computed, ref, watch } from 'vue';
import Confetti from 'vue-confetti/src/confetti';
import type { Locale } from '@/shared/config/i18n';
import { Translation } from '@/shared/config/i18n';

const { locale, availableLocales } = useI18n();
const router = useRouter();
const filteredLanguages = computed(() => availableLocales.filter((lng) => lng !== locale.value));
const clickTimes = ref(0);

const switchLanguage = async (newLocale: Locale) => {
    clickTimes.value += 1;
    Translation.switchLanguage(newLocale);
    await router.push(
        { path: `/${newLocale}` },
    );
};

const confetti = new Confetti();
const isConfetti = ref(false);

const switchConfetti = () => {
    if (isConfetti.value) {
        confetti.stop();
        isConfetti.value = false;
    } else {
        confetti.start();
        isConfetti.value = true;
    }
};
watch(clickTimes, (value) => (value % 7 === 0 ? switchConfetti() : null));
</script>
<style scoped lang="scss">
@import "./LanguageSwitcher";
</style>
