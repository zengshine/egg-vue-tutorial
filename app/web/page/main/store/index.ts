/**
 * @file 状态管理
 */
const state: mainState = {
  isNavVisible: true,
  csrfToken: ''
};

export default {
  state,

  mutations: {
    SET_INIT_STATE(state, payload) {
      Object.assign(state, payload);
    },

    SET_NAV_VISIBILITY(state, payload) {
      state.isNavVisible = payload;
    }
  }
};
