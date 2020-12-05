import Home from './home.vue';
import serverRender from '@framework/vue/entry/server';
import clientRender from '@framework/vue/entry/client';
export default EASY_ENV_IS_NODE ? serverRender({ ...Home }) : clientRender({ ...Home });
