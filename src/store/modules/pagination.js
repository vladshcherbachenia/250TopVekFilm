const pagination = {
  namespaced: true,
  state: {
    pagination: true
  },
  getters: {
    getPagination: ({ pagination }) => pagination
  },
  mutations: {
    UPDATE_STATE_PAGINATION: (state, statePagination) => {
      state.pagination = statePagination;
    }
  },
  actions: {
    updateStatePagination: ({ commit }, newState) => {
      if (newState) {
        commit("UPDATE_STATE_PAGINATION", newState);
        return;
      }
      setTimeout(() => {
        commit("UPDATE_STATE_PAGINATION", newState);
      }, 300);
    }
  }
};

export default pagination;
