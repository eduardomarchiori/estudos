import { login } from "./services";

const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

export default {
  namespaced: true,
  state: {
    auth: null
  },
  mutations: {
    [types.LOGIN](state, auth) {
      state.auth = auth;
    },
    [types.LOGOUT](state) {
      state.auth = null;
    }
  },
  actions: {
    login({ commit }, user) {
      return login(user).then(({ data }) => {
        commit(types.LOGIN, data);
      });
    },
    logout({ commit }) {
      commit(types.LOGOUT);
    }
  },
  getters: {
    isLogged(state) {
      return !!state.auth;
    },
    token(state) {
      return state?.auth?.access_token;
    },
    user(state) {
      const [, encodePayload] = state?.auth?.access_token.split(".");
      const decodePayload = global.atob(encodePayload);
      const user = JSON.parse(decodePayload)?.user;
      return user;
    }
  }
};
