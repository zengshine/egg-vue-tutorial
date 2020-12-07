import SSRBuilder from '@framework/vue/entry';

import createRouter from '@view/main/router/index';
import createStore from '@view/main/store/index';
import App from '@view/main/app.vue';

export default new SSRBuilder({
  entry: App,
  createRouter,
  createStore,
}).bootstrap();
