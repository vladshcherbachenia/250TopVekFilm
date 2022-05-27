<template>
  <div class="bg-listPosters">
    <br />
    <div class="container">
      <div class="row">
        <template v-if="getShow">
          <Loader />
        </template>
        <template v-else>
          <ItemPoster
            v-for="(slicedIDsItem, index) in this.movies"
            :key="index"
            v-bind:poster="slicedIDsItem"
          />
        </template>
      </div>
    </div>
    <Pagination v-show="getPagination" @updateListMovies="getFilms()" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ItemPoster from "../ItemPoster/ItemPoster";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";

export default {
  name: "LIstPosters",
  data: () => ({
    stateShowPagination: true
  }),
  props: ["getFilmsM"],
  components: {
    ItemPoster,
    Loader,
    Pagination
  },
  computed: {
    ...mapState("movies", ["movies"]),
    ...mapGetters("loader", ["getShow"]),
    ...mapGetters("movies", ["currentPage"]),
    ...mapGetters("movies", ["moviesPerPage"]),
    ...mapGetters("movies", ["slicedIDs"]),
    ...mapGetters("pagination", ["getPagination"])
  },
  methods: {
    ...mapActions("movies", ["updateCurrentPage"]),
    ...mapActions("movies", ["updateListFilms"]),
    ...mapActions("movies", ["updateBackground"]),
    ...mapActions("loader", ["updateStateShow"]),
    getFilms() {
      this.getFilmsM();
    }
  }
};
</script>

<style scoped lang="css" src="./style.css"></style>
