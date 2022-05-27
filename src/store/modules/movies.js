import IDs from "@/store/mock/imdb_top250";

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: IDs,
    moviesPerPage: 36,
    currentPage: 1,
    movies: [],
    backgroundSrc: "",
    lenMovies: IDs.length
  },
  getters: {
    slicedIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    lenMovies: ({ lenMovies }) => lenMovies,
    backgroundSrc: ({ backgroundSrc }) => backgroundSrc
  },
  mutations: {
    UPDATE_LIST_FILMS(state, list) {
      state.movies = list;
    },
    UPDATE_CURRENT_PAGE(state, currentPage) {
      state.currentPage = currentPage;
    },
    UPDATE_BACKGROUND(state, srcBackground) {
      state.backgroundSrc = srcBackground;
    }
  },
  actions: {
    updateListFilms({ commit }, list) {
      commit("UPDATE_LIST_FILMS", list);
    },
    updateCurrentPage({ commit }, currentPage) {
      commit("UPDATE_CURRENT_PAGE", currentPage);
    },
    updateBackground({ commit }, srcBackground) {
      commit("UPDATE_BACKGROUND", srcBackground);
    }
  }
};

export default moviesStore;
