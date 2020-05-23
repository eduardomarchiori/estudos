import "dayjs/locale/pt-br";

import Vue from "vue";
import { api } from "env";
import axios from "axios";
import dayjs from "dayjs";

export const fetchPosts = () => {
  const url = `${api}/post`;
  return axios.get(url).then(({ data }) =>
    data.items.map(post => ({
      ...post,
      formatedCreatedAt: dayjs(post.createdAt)
        .locale("pt-br")
        .format("MMMM DD, YYYY")
    }))
  );
};

export const createPost = post => {
  const url = `${api}/post`;
  return axios.post(url, post);
};

export const getPost = uuid => {
  const url = `${api}/post/${uuid}`;
  return axios
    .get(url)
    .then(({ data }) => ({
      ...data,
      formatedCreatedAt: dayjs(data.createdAt)
        .locale("pt-br")
        .format("MMMM DD, YYYY")
    }))
    .catch(error => {
      const message =
        error?.response?.data?.message || "Problemas ao encontrar post";
      Vue.$toast.error(message);
      throw message;
    });
};

export const deletePost = uuid => {
  const url = `${api}/post/${uuid}`;
  return axios.delete(url).catch(error => {
    const message =
      error?.response?.data?.message || "Problemas ao deleter o post";
    Vue.$toast.error(message);
  });
};
