<template>
  <div class="language-switcher-locales">
    <ul class="language-switcher-locales__list">
      <li
          class="language-switcher-locales__item"
          v-for="(lang, i) in filterCurrentLanguage($i18n.availableLocales, $i18n.locale)"
          :key="`Lang${i}`"
      >
        <a
            class="language-switcher-locales__item--btn"
            :href="lang"
            @click.prevent="$router.push({path:'/' + lang})"
        >
          {{ lang }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  defineComponent,
  watch,
  computed,} from '@vue/composition-api';
import {
  setDocumentDirectionPerLocale,
  setDocumentTitle,
  setDocumentLang
} from "@/utils/i18n/document";

import VueI18n from '@/i18n'


export default defineComponent({
  name: 'LanguageSwitcher',
  setup() {
    const filterCurrentLanguage = (locales, currentLocale) => locales.filter((locale) => locale !== currentLocale);

    const locale = computed(() => VueI18n.locale);

    watch(locale, (newLocale, oldLocale) => {
      if (newLocale === oldLocale) {
        return
      }
      setDocumentLang(newLocale)
      setDocumentDirectionPerLocale(newLocale)
      setDocumentTitle(VueI18n.t('title'))
    }, { immediate: true });

    return {
      filterCurrentLanguage
    }
  }
});
</script>
<style scoped lang="scss">
  @import "src/components/languageSwitcher/styles/main";
</style>
