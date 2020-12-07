import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '',
    routes: [
      {
        name: 'main',
        path: '/main',
        component: () => import('@view/main/app.vue'),
      },
      {
        name: 'server',
        path: '/server',
        component: () => import('@view/main/server/index.vue'),
      },
    ],
  });
}
