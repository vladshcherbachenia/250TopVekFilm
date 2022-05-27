<template>
  <div class="col-md-4">
    <b-card
      @mouseover="onHoverBackground"
      :title="poster.Title"
      :img-src="poster.Poster"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 poster-item-hover"
      onHover="onHoverBackground"
    >
      <b-card-text>Актеры: {{ poster.Actors }}</b-card-text>
      <b-card-text>Язык: {{ poster.Language }}</b-card-text>
      <b-button
        @click="
          () => {
            $bvModal.show('bv-modal-example');
            this.openModal();
          }
        "
        class="circle-buttom"
        variant="primary"
        >Подробнее</b-button
      >
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ItemPoster",
  props: {
    poster: {
      Actors: "string",
      Language: "string",
      Poster: "string",
      Title: "string",
      Plot: "string"
    }
  },
  methods: {
    ...mapActions("movies", ["updateBackground"]),
    ...mapActions("modal", [
      "updateTitle",
      "updatePoster",
      "updateActor",
      "updateLang",
      "updatePlot"
    ]),
    onHoverBackground() {
      this.updateBackground(this.poster.Poster);
    },
    openModal() {
      this.updateTitle(this.poster.Title);
      this.updatePoster(this.poster.Poster);
      this.updateLang(this.poster.Language);
      this.updateActor(this.poster.Actors);
      this.updatePlot(this.poster.Plot);
    }
  }
};
</script>

<style scoped lang="css" src="./style.css"></style>
