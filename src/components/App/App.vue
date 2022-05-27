<template>
  <div id="app" v-bind:style="{ background: `url(${this.backgroundSrc})` }">
    <AppMusk />
    <Header />
    <ListPosters :getFilmsM="getFilms" />
    <Modal />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import sourceFilms from "../../api/sourceFilms";
import Header from "../Header/Header";
import ListPosters from "../ListPoster/LIstPosters";
import Modal from "../UI/modal/Modal";
import AppMusk from "./musk/AppMusk";

export default {
  name: "app",
  data() {
    return {
      stateShowPagination: true
    };
  },
  components: {
    Header,
    ListPosters,
    Modal,
    AppMusk
  },
  computed: {
    ...mapGetters("movies", ["slicedIDs"]),
    ...mapGetters("movies", ["currentPage"]),
    ...mapGetters("movies", ["moviesPerPage"]),
    ...mapGetters("movies", ["lenMovies"]),
    ...mapGetters("movies", ["backgroundSrc"])
  },
  mounted() {
    this.getFilms();
  },
  created() {
    if (this.$route.query.id) this.updateCurrentPage(this.$route.query.id);
    else this.updateCurrentPage(this.currentPage);
  },
  methods: {
    ...mapActions("movies", ["updateCurrentPage"]),
    ...mapActions("movies", ["updateListFilms"]),
    ...mapActions("movies", ["updateBackground"]),
    ...mapActions("loader", ["updateStateShow"]),
    ...mapActions("pagination", ["updateStatePagination"]),
    getFilms() {
      this.updateStateShow(true);
      this.updateStatePagination(true);
      const currentPage = this.currentPage;
      const perPage = this.moviesPerPage;
      const idFilms = this.slicedIDs(
        currentPage * perPage - perPage,
        currentPage * perPage
      );
      let listPosterFilms = [];
      idFilms.forEach((hash, index) => {
        sourceFilms.getPosters(hash).then(data => {
          if (index === 0) this.updateBackground(data.Poster);
          listPosterFilms.push(data);
          setTimeout(() => {
            this.updateStateShow(false);
          }, 500);
        });
      });
      this.$router.push({ path: `/page?id=${currentPage}` }).catch(() => {});
      this.updateListFilms(listPosterFilms);
    }
  }
};
</script>

<style scoped lang="css" src="./style.css"></style>
