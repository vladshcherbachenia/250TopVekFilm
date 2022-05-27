<template>
  <div class="bg-header">
    <b-navbar class="bg-info_header" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">КИНОВЕК ТОП 250</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              @keyup.enter.prevent="this.search"
              size="sm"
              v-model="searchText"
              class="mr-sm-2 inputSearch"
              placeholder="Поиск"
            ></b-form-input>
            <b-button
              @click="this.search"
              size="sm"
              class="my-2 my-sm-0 button"
              type="button"
              >Найти</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import sourceFilms from "../../api/sourceFilms";

export default {
  name: "Header",
  data() {
    return {
      searchText: ""
    };
  },
  computed: {
    ...mapGetters("movies", ["currentPage"]),
    ...mapGetters("movies", ["moviesPerPage"]),
    ...mapGetters("movies", ["slicedIDs"]),
    ...mapGetters("pagination", ["getPagination"])
  },
  methods: {
    ...mapActions("movies", ["updateListFilms"]),
    ...mapActions("loader", ["updateStateShow"]),
    ...mapActions("pagination", ["updateStatePagination"]),
    async search() {
      if (this.searchText.length < 3) {
        this.updateStatePagination(true);
        return;
      }
      sourceFilms.searchPosterName(this.searchText).then(({ Search }) => {
        this.updateListFilms(Search);
        this.updateStatePagination(false);
      });
    }
  }
};
</script>

<style scoped lang="css" src="./style.css"></style>
