<script setup lang="ts">
import Login from "@/components/Auth/Login.vue";
import Register from "@/components/Auth/Register.vue";
</script>
<template>
  <Login @showRegister="toggle" v-if="!register"/>
  <Register v-else  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Authentication",
  data() {
    return {
      register: false as boolean,
    };
  },
  methods:{
    toggle(){
      this.register=!this.register
      this.$store.commit('AUTHENTICATE_USER');
    }
  }
});
</script>

<style>
</style>