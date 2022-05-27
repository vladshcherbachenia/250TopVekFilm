import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import loader from "./modules/loader";
import pagination from "./modules/pagination";
import modal from "./modules/modal";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
    pagination,
    modal
  }
});
