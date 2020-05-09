import Vue from "vue";
import VueRouter from "vue-router";
import AppRoutes from "@/views/routes";

Vue.use(VueRouter);

const routes = [...AppRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;