/**
 * @file 状态管理
 */
export default {
  state: {
    isNavVisible: true
  },

  mutations: {
    SET_INIT_STATE(state, payload) {
      Object.assign(state, payload);
    },

    SET_NAV_VISIBILITY(state, payload) {
      state.isNavVisible = payload;
    }
  }
};
