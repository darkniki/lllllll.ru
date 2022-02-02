<template>
  <div id="app">
    <header>
      <nav>
        <LanguageSwitcher />
      </nav>
    </header>
    <router-view />
    <footer>
      <cookie-law :buttonText="$t('cookiesButtonText')">
        <div slot="message">
          {{ $t('cookies') }}
        </div>
      </cookie-law>
    </footer>
  </div>
</template>

<script>
import {defineComponent, defineAsyncComponent} from '@vue/composition-api';
import CookieLaw from 'vue-cookie-law';

const LanguageSwitcher = defineAsyncComponent(() => import(/* webpackChunkName: "LanguageSwitcher" */'@/components/languageSwitcher/LanguageSwitcher'));

export default defineComponent({
  components: {
    LanguageSwitcher,
    CookieLaw,
  },
});
</script>

<style lang="scss">
  @import "src/assets/styles/main";
</style>
