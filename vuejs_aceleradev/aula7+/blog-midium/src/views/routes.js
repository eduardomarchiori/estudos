import App from "./index.vue";
import PostRoutes from "@/views/posts/routes";
import LoginRoutes from "@/views/login/routes";

export default [
  {
    path: "/",
    name: "App",
    component: App,
    children: [...PostRoutes],
  },
  ...LoginRoutes
];