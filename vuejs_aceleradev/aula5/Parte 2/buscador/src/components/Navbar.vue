<template>

    <div class="has-text-centered ">
       <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                  <slot  name="start"/>
                </div>
            </div>
             <div class="navbar-menu">
                <div class="navbar-end">
                    <slot name="end"/>
                </div>
            </div>
        </nav>   
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