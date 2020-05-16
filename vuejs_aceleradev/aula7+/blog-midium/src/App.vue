<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style lang="scss">
@import "~bulma";
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.snow.css";
$size: 40px;
$position: 50%;
div,
section {
  &.is-loading {
    position: relative;
    &::after {
      @extend %loader;
      position: absolute;
      border-width: 5px;
      width: $size;
      height: $size;
      top: $position;
      left: $position;
      margin-left: -$size / 2;
      margin-top: -$size / 2;
    }
  }
}
</style>
