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
import LanguageSwitcher from '@/components/LanguageSwitcher';
export default {
  components: {LanguageSwitcher},
};
</script>

<style scoped>
header {
  height: fit-content;
  padding: 10px 0;
  margin-bottom: -10px;
 }

nav {
  margin: 0 auto;
  padding-right: 20px;
  display: flex;
  justify-content: right;
}

</style>
