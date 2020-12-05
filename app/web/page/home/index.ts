import serverRender from '@framework/vue/entry/server';
import clientRender from '@framework/vue/entry/client';
import Home from '@view/home/index.vue';
export default EASY_ENV_IS_NODE ? serverRender({ ...Home }) : clientRender({ ...Home });
