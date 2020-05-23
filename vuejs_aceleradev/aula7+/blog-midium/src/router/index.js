import Vue from "vue";
import VueRouter from "vue-router";

import AppRoutes from "@/views/routes";
import { beforeEach } from "./interceptor";

Vue.use(VueRouter);

const routes = [...AppRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(beforeEach);

export default router;
