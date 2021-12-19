import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import VueCountdown from '@chenfengyuan/vue-countdown';

import router from './router'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)
Vue.component(VueCountdown.name, VueCountdown)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
