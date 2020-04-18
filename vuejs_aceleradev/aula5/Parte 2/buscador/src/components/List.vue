<template>

    <div class="has-text-centered ">
        <span class="has-text-weight-bold is-size-5">{{title}}</span>
        <ul>
            <li v-for="(item,idx) in itens" :key="idx">{{item}}</li>
        </ul>
    </div>

</template>

<script>
export default {
    props:{
        title: String,
        itens: Array
    },
    data: function(){
        return{
            
        }
    }
}
</script>

<style lang="scss">

</style>