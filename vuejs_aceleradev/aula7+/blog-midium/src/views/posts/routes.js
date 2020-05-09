import Posts from "./index.vue";
import CreatePost from "./Create.vue";
import ReadPost from "./Read.vue";

export default [
  {
    path: "posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "posts/novo",
    name: "Posts/Novo",
    component: CreatePost,
  },
  {
    path: "posts/:uuid",
    props: true,
    name: "Posts/Read",
    component: ReadPost,
  },
];