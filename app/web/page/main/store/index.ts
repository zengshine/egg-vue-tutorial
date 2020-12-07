import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

export default function createStore(initState: any = {}) {
  return new Vuex.Store({
    state: {
      ...initState,
    },
  });
}
