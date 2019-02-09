<template>
  <section class="my-5 container">

      <mdb-input label="Username" size="md" v-model="data.username"/>
      <mdb-input label="Password" size="md" v-model="data.password" type="password"/>
      
      <button type="button" class="btn btn-primary" v-on:click="Login">Login</button>
      <button type="button" class="btn btn-primary" v-on:click="Logout">Logout</button>
      <button type="button" class="btn btn-primary" v-on:click="Register">Register</button>

      <div>
          {{msg}}
      </div>
  </section>
</template>

<script>
import { mdbInput } from 'mdbvue';
import store from '../store'

export default {
  name: 'LoginPage',
  components:{
      mdbInput
  },
  created(){

  },
  data () {
    return {
      data: {
          username: '',
          password: ''
      },
      msg: ''
    };
  },
  methods: {
    Dummy: function(){
      
    },
    Login: function(){
      store.commit('LOGIN', this.data);
    },
    Logout: function(){
      store.commit('LOGOUT', this.data);
    },
    Register: function(){
      this.$http.post('/auth/register', this.data)
      .then((data) => {
        this.msg = data;
      })
    }
  }
}
</script>