import Vue from 'vue';

import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

import SSRBuilder from '@web/framework/vue/app';

import Layout from '@web/template/server/index.vue';

import App from '@web/page/login/index.vue';

import storeOptions from './store';

Vue.use(Vuex);

Vue.use(VueRouter);

Vue.component(Layout.name, Layout);

const router = new VueRouter({});

const store = new Vuex.Store(storeOptions);

sync(store, router);

export default new SSRBuilder({
  Vue,
  router,
  store,
  entry: App
}).bootstrap();

