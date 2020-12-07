import Vue from 'vue';
import { sync } from 'vuex-router-sync';

export default class App {
  config: any;
  constructor(config) {
    this.config = config;
  }

  bootstrap() {
    if (EASY_ENV_IS_NODE) {
      return this.server();
    }
    return this.client();
  }

  create(initState) {
    const { entry, createStore, createRouter } = this.config;
    const store = createStore(initState);
    const router = createRouter();
    sync(store, router);
    return {
      router,
      store,
      render: h => {
        return h(entry);
      },
    };
  }

  fetch(vm): Promise<any> {
    const { store, router } = vm;
    const matchedComponents = router.getMatchedComponents();
    if (!matchedComponents) {
      return Promise.reject(new Error('No Match Component'));
    }
    return Promise.all(
      matchedComponents.map((component: any) => {
        const options = component.options;
        if (options && options.methods && options.methods.fetchApi) {
          return options.methods.fetchApi.call(component, { store, router, route: router.currentRoute });
        }
        return null;
      }),
    );
  }

  client() {
    Vue.prototype.$http = require('axios');
    const vm = this.create(window.__INITIAL_STATE__);
    vm.router.afterEach(() => {
      this.fetch(vm);
    });
    const app = new Vue(vm);
    app.$mount('#app');
    return app;
  }

  server() {
    return context => {
      const vm = this.create(context.state);
      const { store, router } = vm;

      // 设置初始路径
      const { url } = context.state;
      const initPath = url || '/server';
      router.push(initPath);
      return new Promise(resolve => {
        router.onReady(() => {
          this.fetch(vm).then(() => {
            context.state = store.state;
            return resolve(new Vue(vm));
          });
        });
      });
    };
  }
}
