import axios from "@/plugins/axios";

export default {
  async getPosters(hash) {
    try {
      return await axios.get(`/?i=${hash}`);
    } catch (err) {
      console.log(`${err}`)
    }
  },
  async searchPosterName(query) {
    try {
      return await axios.get(`/?s=${query}`);
    } catch (err) {
      console.log(`${err}`)
    }
  }
};
