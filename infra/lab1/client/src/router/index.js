import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('../pages/Home.vue')
    }
  ],
  history: createWebHashHistory()
});

export default router;
