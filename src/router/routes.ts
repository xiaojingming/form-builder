import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/Home/HomePage.vue'),
  },
  {
    name: 'form',
    path: '/form',
    component: () => import('@/pages/Form/FormPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
