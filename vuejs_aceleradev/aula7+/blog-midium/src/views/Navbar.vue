<template>
  <div class="navbar">
    <div class="navbar-menu is-active">
      <div class="navbar-brand">
        <span class="navbar-item">CodeBlog</span>
      </div>
      <div class="navbar-end">
        <router-link :to="{ name: 'Posts' }" class="navbar-item" data-testid="posts">
          Posts
        </router-link>

        <div class="navbar-item">
          <router-link :to="{ name: 'Posts/Novo' }" class="button is-light" data-testid="create-post">
            Criar Post
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  padding: 20px;
}
</style>