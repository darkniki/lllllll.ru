<template>
  <div>
    <ul
        style="list-style: none; display: flex"
    >
      <li
          v-for="(lang, i) in filterCurrentLanguage($i18n.availableLocales, $i18n.locale)"
          :key="`Lang${i}`"
          style="text-transform: uppercase; padding: 5px;"
      >
        <a style="text-decoration: none; color: aqua" :href="lang" @click.prevent="$router.push({path:'/' + lang})">{{ lang }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  setup() {
    const filterCurrentLanguage = (locales, currentLocale) => locales.filter((locale) => locale !== currentLocale);

    return {
      filterCurrentLanguage
    }
  }

};
</script>
