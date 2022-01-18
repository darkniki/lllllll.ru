<template>
  <div id="app">
    <header>
      <nav>
        <LanguageSwitcher/>
      </nav>
    </header>
    <router-view/>
  </div>
</template>
<script>
import {defineComponent, defineAsyncComponent} from '@vue/composition-api';

const LanguageSwitcher = defineAsyncComponent( () => (import(/* webpackChunkName: "LanguageSwitcher" */'@/components/languageSwitcher/LanguageSwitcher')));

export default defineComponent({
  components: {LanguageSwitcher},
});
</script>

<style lang="scss">
  @import "src/assets/styles/main";
</style>
