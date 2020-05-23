<template>
  <section class="hero" :class="{ 'is-loading': isLoading }">
    <div class="hero-body">
      <div class="container">
        <section class="section">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="content is-medium" v-if="post">
                <button
                  @click="onClickDelete"
                  v-if="isPermittedDelete"
                  class="button is-pulled-right is-danger"
                  :class="{ 'is-loading': isLoadingDelete }"
                >
                  Deletar
                </button>
                <h1 class="title">{{ post.title }}</h1>
                <span
                  class="is-size-7 is-pulled-right is-italic has-text-weight-bold"
                  >{{ post.userEmail }}</span
                >
                <h1 class="subtitle is-4">{{ post.formatedCreatedAt }}</h1>
                <div v-html="post.post"></div>
              </div>
              <div v-else-if="notFoundMessage" class="is-hcentered">
                <span class="title is-3">{{ notFoundMessage }}</span>
                <router-link
                  class="button is-dark"
                  :to="{ name: 'Posts' }"
                  replace
                  >Voltar</router-link
                >
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { getPost, deletePost } from "./services";
import { mapGetters } from "vuex";
export default {
  props: {
    uuid: String
  },
  data() {
    return {
      isLoading: false,
      post: null,
      isLoadingDelete: false,
      notFoundMessage: ""
    };
  },
  computed: {
    ...mapGetters("login", ["isLogged", "user"]),
    isPermittedDelete() {
      return this.isLogged && this.user.email === this.post.userEmail;
    }
  },
  created() {
    this.isLoading = true;
    getPost(this.uuid)
      .then(post => {
        this.post = post;
      })
      .catch(message => {
        this.notFoundMessage = message;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
  methods: {
    onClickDelete() {
      this.isLoadingDelete = true;
      deletePost(this.uuid).finally(() => {
        this.isLoadingDelete = false;
      });
    }
  }
};
</script>

<style lang="scss">
.ql-toolbar,
.ql-container {
  border: none !important;
}

.is-hcentered {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
