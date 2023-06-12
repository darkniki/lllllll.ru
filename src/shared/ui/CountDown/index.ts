import { defineAsyncComponent } from 'vue';

export const CountDown = defineAsyncComponent(
    () => import('./ui/CountDown.vue'),
);
