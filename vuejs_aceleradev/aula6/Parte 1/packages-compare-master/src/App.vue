<template>
  <div>
    <compare-packages></compare-packages>
  </div>
</template>

<script>
import ComparePackages from "@/views/ComparePackages";

export default {
  name: "App",
  components: {
    ComparePackages
  }
};
</script>

<style lang="scss">
@import "~bulma";
</style>
