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
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  name: 'LanguageSwitcher',
  setup() {
    const filterCurrentLanguage = (locales, currentLocale) => locales.filter((locale) => locale !== currentLocale);

    return {
      filterCurrentLanguage
    }
  }
});
</script>
<style scoped lang="scss">
  @import "src/components/languageSwitcher/styles/main";
</style>
