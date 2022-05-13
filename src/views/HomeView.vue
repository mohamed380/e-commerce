<script setup lang="ts">
import Product from "@/components/Product.vue";
import Authentication from "@/components/Auth/Authentication.vue";
</script>

<template>
  <div
    class="row justify-content-between card-columns"
    v-if="productList != null"
  >
    <Product
      v-for="productObj in productList"
      :key="productObj.id"
      :product="productObj"
    />
    <Authentication v-if="showAuthForm" />
  </div>
  <div v-else class="d-flex justify-content-center align-items-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "HomeView",
  computed: { ...mapGetters(["productList", "showAuthForm"]) },
  methods: { ...mapActions(["getProducts"]) },
  async created() {
    await this.getProducts();
  },
});
</script>

<style scoped>
.align-middle {
  height: 100%;
}
</style>
