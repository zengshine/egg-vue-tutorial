export default {
  mode: 'history',
  base: '/main',
  routes: [
    {
      name: 'main',
      path: '',
      component: () => import('@view/main/view/chat/index.vue'),
      children: [
        {
          name: 'chat',
          path: '/chat',
          component: () => import('@view/main/view/chat/index.vue'),
        },
      ],
    },
  ],
};
