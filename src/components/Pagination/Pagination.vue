<template>
  <div class="pagination-box">
    <b-pagination
      pills
      size="lg"
      v-model="currentPageModel"
      :total-rows="lenMovies"
      :per-page="moviesPerPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Pagination",
  computed: {
    ...mapGetters("movies", ["lenMovies"]),
    ...mapGetters("movies", ["currentPage"]),
    ...mapGetters("movies", ["moviesPerPage"]),
    ...mapGetters("movies", ["lenMovies"]),
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(val) {
        this.updateCurrentPage(val);
        this.$emit("updateListMovies", val);
      }
    }
  },
  methods: {
    ...mapActions("movies", ["updateCurrentPage"])
  }
};
</script>

<style src="./style.css"></style>
