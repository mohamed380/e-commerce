<template>
  <div class="about">
    <h1>{{ isLoading }} - {{ authUser.email }} - {{ authUser.fullName }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default defineComponent({
  data() {
    return {
      
    }
  },
  computed:{
    ...mapGetters(['visitsNo', 'isLoading','authUser']),
  },
  methods:{
    ...mapActions({fetchProducts:'getProducts', auth: 'getAuth', register: 'register', login:'login'})
  },
  created(){
    this.register({email:'m@m.com',fullName:'ss',password:'12345'});
    // localStorage.removeItem('auth-user');
    // this.login({email:'m@m.com',password:'12345'});
    // this.auth();
    // this.fetchProducts();
    // console.log(this.authUser,'xx');
  }
})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
