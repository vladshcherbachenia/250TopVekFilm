const modal = {
  namespaced: true,
  state: {
    title: "",
    poster: "",
    actor: "",
    lang: "",
    plot: ""
  },
  getters: {
    getTitle: ({ title }) => title,
    getPoster: ({ poster }) => poster,
    getActor: ({ actor }) => actor,
    getlang: ({ lang }) => lang,
    getPlot: ({ plot }) => plot
  },
  mutations: {
    UPDATE_STATE_TITLE: (state, stateTitle) => {
      state.title = stateTitle;
    },
    UPDATE_STATE_POSTER: (state, statePoster) => {
      state.poster = statePoster;
    },
    UPDATE_STATE_ACTOR: (state, stateActor) => {
      state.actor = stateActor;
    },
    UPDATE_STATE_LANG: (state, stateLang) => {
      state.lang = stateLang;
    },
    UPDATE_STATE_PLOT: (state, statePlot) => {
      state.plot = statePlot;
    }
  },
  actions: {
    updateTitle({ commit }, list) {
      commit("UPDATE_STATE_TITLE", list);
    },
    updatePoster({ commit }, list) {
      commit("UPDATE_STATE_POSTER", list);
    },
    updateActor({ commit }, list) {
      commit("UPDATE_STATE_ACTOR", list);
    },
    updateLang({ commit }, list) {
      commit("UPDATE_STATE_LANG", list);
    },
    updatePlot({ commit }, plot) {
      commit("UPDATE_STATE_PLOT", plot);
    }
  }
};

export default modal;
