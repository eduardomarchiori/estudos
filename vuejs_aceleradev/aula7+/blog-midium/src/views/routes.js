import App from "./index.vue";
import PostRoutes from "@/views/posts/routes";

export default [
  {
    path: "/",
    name: "App",
    component: App,
    children: [...PostRoutes],
  },
];