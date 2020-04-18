<template>
  <div id="app">
    <navbar>
        <div class="navbar-item" slot="start">
            Home
        </div>
         <div class="navbar-item" slot="end">
            Perfil
        </div>
    </navbar>
    <input type="text" class="input" v-model="filter">
    <list 
    title="Busca" 
    :itens="filteredItens"
    />

  </div>
</template>

<script>
import List from "./components/List.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    List,
    Navbar
  },
  computed:{
    filteredItens: function(){
      return this.itens.filter(item => item.toLowerCase()
      .includes(this.filter.toLowerCase()))
      .slice(0, 5);
    }
  },
  data: function(){
    return{
      itens: ['Item 1', "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"],
      filter: ''
    }
  }
};
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass"
</style>
