<template>
  <div class="columns is-multiline is-fullwidth">
    <div class="column is-4" v-for="(packageValue, idx) in packages" :key="idx">
      <div class="card">
        <div class="card-content">
          <a
            class="button is-danger is-outlined is-small is-pulled-right"
            target="_blank"
            @click="$emit('remove', packageValue, idx)"
          >
            Remover
          </a>
          <a
            class="button is-small is-pulled-right"
            :href="`https://www.npmjs.com/package/${packageValue.name}`"
            target="_blank"
          >
            Acessar
          </a>
          <p class="title is-4">
            {{ packageValue.name }}@{{ packageValue.version }}
          </p>
          <p>Tamanho{{ packageValue.gzip / 1000 }}KB</p>
          <p>Tamanho{{ packageValue.dependencyCount }} Dependencias</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    packages: Array
  }
};
</script>

<style>
.is-fullwidth {
  width: 100vh;
}
.is-fullcenter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
