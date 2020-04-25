<template>
  <div class="container is-fullheight is-fullcenter">
    <h1 class="title">Comparador de pacotes</h1>
    <search-packages-form @found="onFoundPackage"></search-packages-form>
    <package-card-list
      :packages="packages"
      @remove="onClickRemove"
    ></package-card-list>
  </div>
</template>

<script>
import SearchPackagesForm from "@/components/SearchPackagesForm.vue";
import PackageCardList from "@/components/PackageCardList.vue";

export default {
  name: "App",
  components: {
    SearchPackagesForm,
    PackageCardList
  },
  data: function() {
    return {
      packages: []
    };
  },
  methods: {
    onFoundPackage(packageInfo) {
      this.packages.push(packageInfo);
    },
    onClickRemove(packageInfo, idx) {
      this.packages.splice(idx, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.is-fullheight {
  height: 100vh;
}
.is-fullcenter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
