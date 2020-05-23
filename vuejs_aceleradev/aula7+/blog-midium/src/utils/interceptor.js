import store from "@/store";

export const request = config => {
  const isLogged = store.getters["login/isLogged"];
  const token = store.getters["login/token"];

  if (isLogged) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
