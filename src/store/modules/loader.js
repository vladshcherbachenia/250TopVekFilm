const loader = {
  namespaced: true,
  state: {
    show: true
  },
  getters: {
    getShow: ({ show }) => show
  },
  mutations: {
    UPDATE_STATE_SHOW: (state, stateShow) => {
      state.show = stateShow;
    }
  },
  actions: {
    updateStateShow: ({ commit }, newState) => {
      if (newState) {
        commit("UPDATE_STATE_SHOW", newState);
        return;
      }
      setTimeout(() => {
        commit("UPDATE_STATE_SHOW", newState);
      }, 300);
    }
  }
};

export default loader;
