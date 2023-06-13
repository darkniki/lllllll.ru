import { createRouter, createWebHistory } from 'vue-router';
import { MainPage } from '@/pages/MainPage';
import { Translation } from '@/shared/config/i18n/translation';

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/:locale?',
    [AppRoutes.NOT_FOUND]: '/:pathMatch(.*)*',
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: RoutePath[AppRoutes.MAIN],
            beforeEnter: Translation.routeMiddleware,
            children: [
                {
                    path: RoutePath[AppRoutes.MAIN],
                    name: AppRoutes.MAIN,
                    component: MainPage,
                },
            ],
        },
        {
            path: RoutePath[AppRoutes.NOT_FOUND],
            name: AppRoutes.NOT_FOUND,
            redirect: '/',
        },
    ],
});

export { router };
