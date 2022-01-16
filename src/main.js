import Vue from 'vue';
import App from '@/App';
import VueCompositionAPI from '@vue/composition-api';
import VueCountdown from '@chenfengyuan/vue-countdown';

import router from '@/router';
import i18n from '@/i18n';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.component(VueCountdown.name, VueCountdown);

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
    let language = to.params.lang;

    if (language) {
        i18n.locale = language;
    }
    next();
});

new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app');
