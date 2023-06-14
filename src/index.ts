import '@/app/styles/index.scss';
import { createApp } from 'vue';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import App from '@/app/App.vue';
import { router } from '@/shared/config/router';
import { i18n } from '@/shared/config/i18n';

dayjs.extend(duration);
const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
