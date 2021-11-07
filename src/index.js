import './styles/main.scss';

require('./index.html');

import Vue from 'vue';
import VueConfetti from 'vue-confetti';
import VueCountdown from '@chenfengyuan/vue-countdown';
import App from './App.vue';
Vue.use(VueConfetti);
Vue.component(VueCountdown.name, VueCountdown);
new Vue({
    render: (h) => h(App),
}).$mount('#app');
