<template>
  <section class="hero" :class="{ 'is-loading': isLoading }">
    <div class="hero-body">
      <div class="container">
        <div v-for="post in posts" :key="post.uuid">
          <section class="section">
            <div class="columns has-clickable" @click="onClickPost(post.uuid)">
              <div class="column is-8 is-offset-2">
                <div class="content is-medium">
                  <span
                    class="is-size-7 is-pulled-right is-italic has-text-weight-bold"
                    >{{ post.userEmail }}</span
                  >
                  <h2 class="subtitle is-4">{{ post.formatedCreatedAt }}</h2>
                  <h1 class="title">{{ post.title }}</h1>
                </div>
              </div>
            </div>
          </section>
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchPosts } from "./services";
export default {
  data() {
    return {
      posts: [],
      isLoading: false
    };
  },
  created() {
    this.isLoading = true;
    fetchPosts().then(posts => {
      this.posts = posts;
      this.isLoading = false;
    });
  },
  methods: {
    onClickPost(uuid) {
      this.$router.push({ name: "Posts/Read", params: { uuid } });
    }
  }
};
</script>

<style lang="scss" scoped>
.has-clickable {
  cursor: pointer;
}
.hero {
  min-height: 60vh;
}
</style>
