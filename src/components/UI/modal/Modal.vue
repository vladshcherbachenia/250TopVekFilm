<template>
  <b-modal id="bv-modal-example" hide-footer>
    <div class="d-block text-center">
      <h3>{{ this.getTitle }}</h3>
      <p><img :src="this.getPoster" /></p>
      <p>Описание: {{ this.getPlot }}</p>
      <p>Язык:{{ this.getlang }}</p>
      <p>Актер:{{ this.getActor }}</p>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
      >Закрыть</b-button
    >
  </b-modal>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Modal",
  computed: {
    ...mapGetters("modal", [
      "getTitle",
      "getPoster",
      "getActor",
      "getlang",
      "getPlot"
    ])
  }
};
</script>

<style scoped lang="css" src="./style.css"></style>
