import Vue from "vue";
import VueRouter from "vue-router";
import App from "./components/App/App.vue";
import store from "./store";
import "./plugins/bootstrap";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "root",
      component: App
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
