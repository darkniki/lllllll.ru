<template>
  <div id="app">
    <header>
      <nav>
        <LanguageSwitcher />
      </nav>
    </header>
    <router-view />
    <footer>
      <cookie-law :buttonText="$t('cookiesButtonText')" theme="blood-red">
        <div slot="message">
          {{ $t('cookies') }}
        </div>
      </cookie-law>
    </footer>
  </div>
</template>

<script>
import {defineComponent, defineAsyncComponent} from '@vue/composition-api';

const LanguageSwitcher = defineAsyncComponent(() => import(/* webpackChunkName: "LanguageSwitcher" */'@/components/languageSwitcher/LanguageSwitcher'));
const CookieLaw = defineAsyncComponent(() => import(/* webpackChunkName: "CookieLaw" */'vue-cookie-law'));

export default defineComponent({
  components: {
    LanguageSwitcher,
    CookieLaw,
  },
  mounted() {
    document.ontouchmove = function (e) {
      e.preventDefault();
    }
  }
});
</script>

<style lang="scss">
@import "src/assets/styles/main";
</style>
