<template>
  <section class="hero" :class="{ 'is-loading': isLoading }">
    <div class="hero-body">
      <div class="container">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input
              class="input is-large"
              placeholder="Titulo"
              v-model="title"
            />
          </div>
          <div class="control">
            <button @click="onClickSave(title, post)" class="button is-large">
              Salvar
            </button>
          </div>
        </div>
        <quill-editor v-model="post" />
      </div>
    </div>
  </section>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import { createPost } from "./services";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      title: "",
      post: "<h2>Exemplo</h2>",
      isLoading: false
    };
  },
  methods: {
    onClickSave(title, post) {
      this.isLoading = true;
      createPost({ title, post }).then(() => {
        this.$router.push({ name: "Posts" });
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
</style>
