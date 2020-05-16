 
<template>
  <section class="hero is-fullheight is-dark">
    <div class="hero-body">
      <div class="columns is-fullwidth">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <h1 class="title has-text-centered has-text-dark">Login</h1>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input v-model="user.username" class="input" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label">Senha</label>
              <div class="control">
                <input v-model="user.password" class="input" type="password" />
              </div>
            </div>
            <div class="control">
              <button @click="onClickLogin(user)" class="button is-dark is-fullwidth">Entrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data(){
        return{
            user:{
                username: "usuario.01@codenation.com",
                password: "123456"
            }
        }
    },
    methods:{
        ...mapActions('login', ['login']),
        onClickLogin(user){
            // this.$store.dispatch('login/login', user);
            this.login(user).then(()=>{
                this.$router.push({name: "Posts"});
            }).catch((error)=>{
                this.user.password = '';
            })
        }
    }
}
</script>

<style>
.is-fullwidth{
    width: 100%;
}
</style>