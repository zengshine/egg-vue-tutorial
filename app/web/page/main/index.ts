import Vue from 'vue';

import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

import SSRBuilder from '@framework/vue/app';

import routerOptions from '@view/main/router/index';
import storeOptions from '@view/main/store/index';

import Layout from '@web/template/server/index.vue';

import App from '@view/main/index.vue';

Vue.use(Vuex);

Vue.use(VueRouter);

Vue.component(Layout.name, Layout);

const router = new VueRouter(routerOptions);
const store = new Vuex.Store(storeOptions);

sync(store, router);

export default new SSRBuilder({
  Vue,
  router,
  store,
  entry: App,
}).bootstrap();

