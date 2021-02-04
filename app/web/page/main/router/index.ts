export default {
  mode: 'history',
  base: '/main',
  routes: [
    {
      name: 'main',
      path: '',
      redirect: '',
      component: () => import('@web/page/main/view/sub-nav/index.vue'),
      children: [
        {
          name: 'cubism',
          path: '/cubism',
          component: () => import('@web/page/main/view/cubism/index.vue')
        },
        {
          name: 'three.js',
          path: '/three',
          component: () => import('@web/page/main/view/three/index.vue')
        }
      ]
    }
  ]
};
