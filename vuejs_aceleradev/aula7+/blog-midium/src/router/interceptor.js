import store from "@/store";
import router from "@/router";

export const beforeEach = (to, from, next) => {
  const isLogged = store.getters["login/isLogged"];
  const isNeedAuthorization = to?.meta?.auth;
  const isLoginRoute = to?.name === "Login";

  // if(isLogged || to.name === "Login" || to.name === "Posts"){
  //     next();
  // }

  if ((isNeedAuthorization && isLogged) || !isNeedAuthorization) {
    next();
  } else if (!isLoginRoute) {
    router.psh({ name: "Login" });
  }
};
