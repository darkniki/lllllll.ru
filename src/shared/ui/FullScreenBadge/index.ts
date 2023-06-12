import { defineAsyncComponent } from 'vue';

export const FullScreenBadge = defineAsyncComponent(
    () => import('./ui/FullScreenBadge.vue'),
);
