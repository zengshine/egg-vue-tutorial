import Vue from 'vue';

import Vuex from 'vuex';
import VueRouter, { RouterOptions } from 'vue-router';
import { sync } from 'vuex-router-sync';

import SSRBuilder from '@framework/vue/app';

import routerOptions from './router';
import storeOptions from './store';

import Layout from '@web/template/server/index.vue';

import App from '@view/main/index.vue';

Vue.use(Vuex);

Vue.use(VueRouter);

Vue.component(Layout.name, Layout);

const router = new VueRouter(routerOptions as RouterOptions);
const store = new Vuex.Store(storeOptions);

sync(store, router);

export default new SSRBuilder({
  Vue,
  router,
  store,
  entry: App,
}).bootstrap();

