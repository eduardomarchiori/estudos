<template>
  <section class="hero" :class="{ 'is-loading': isLoading }">
    <div class="hero-body">
      <div class="container">
        <section class="section">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="content is-medium">
                <h1 class="title">{{ post.title }}</h1>
                <h1 class="subtitle is-4">{{ post.formatedCreatedAt }}</h1>
                <div v-html="post.post"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { getPost } from "./services";
export default {
  props: {
    uuid: String,
  },
  data() {
    return {
      isLoading: false,
      post: {},
    };
  },
  created() {
    this.isLoading = true;
    getPost(this.uuid).then((post) => {
      this.post = post;
      this.isLoading = false;
    });
  },
};
</script>

<style lang="scss">
.ql-toolbar,
.ql-container {
  border: none !important;
}
</style>