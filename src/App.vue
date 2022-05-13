<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Layout/Header.vue";
import Footer from "@/components/Layout/Footer.vue";
</script>

<template>
  <Header />
  <div class="container">
    <RouterView class="pt-10" />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "App",
  methods: { ...mapActions(["getAuth"]) },
  created() {
    this.getAuth();
  },
});
</script>


<style scoped>
@import "@/assets/base.css";
.pt-10 {
  padding-top: 5rem !important;
}
.container {
  min-height: 800px;
}
</style>
