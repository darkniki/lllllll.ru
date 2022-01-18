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
import LanguageSwitcher from '@/components/languageSwitcher/LanguageSwitcher';
export default {
  components: {LanguageSwitcher},
};
</script>

<style lang="scss">
  @import "src/assets/styles/main";
</style>
