<template>
  <div class="navbar">
    <div class="navbar-menu">
      <div class="navbar-brand">
        <span class="navbar-item">CodeBlog</span>
      </div>
      <div class="navbar-end">
        <router-link
          :to="{ name: 'Posts' }"
          class="navbar-item"
          data-testid="posts"
          >Posts</router-link
        >

        <div class="navbar-item">
          <router-link
            v-if="isLogged"
            :to="{ name: 'Posts/Novo' }"
            class="button is-light"
            data-testid="create-post"
            >Criar Post</router-link
          >
        </div>
        <div class="navbar-item">
          <button @click="logout" v-if="isLogged" class="button is-dark">
            Logout
          </button>
          <router-link v-else :to="{ name: 'Login' }" class="button is-dark"
            >Login</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("login", ["isLogged"])
  },
  methods: {
    ...mapActions("login", ["logout"])
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 20px;
}
</style>
