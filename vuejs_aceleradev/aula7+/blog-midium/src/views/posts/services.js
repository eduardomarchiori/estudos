import "dayjs/locale/pt-br";

import { api } from "env";
import axios from "axios";
import dayjs from "dayjs";

export const fetchPosts = () => {
  const url = `${api}/post`;
  return axios.get(url).then(({ data }) =>
    data.items.map((post) => ({
      ...post,
      formatedCreatedAt: dayjs(post.createdAt)
        .locale("pt-br")
        .format("MMMM DD, YYYY"),
    }))
  );
};

export const createPost = (post) => {
  const url = `${api}/post`;
  return axios.post(url, post);
};

export const getPost = (uuid) => {
  const url = `${api}/post/${uuid}`;
  return axios.get(url).then(({ data }) => ({
    ...data,
    formatedCreatedAt: dayjs(data.createdAt)
      .locale("pt-br")
      .format("MMMM DD, YYYY"),
  }));
};