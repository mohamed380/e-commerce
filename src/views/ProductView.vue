<script setup lang="ts">
import Product from "@/components/Product.vue";
import Authentication from "@/components/Auth/Authentication.vue";
</script>

<template>
  <div
    class="row justify-content-between card-columns"
    v-if="activeProduct != null"
  >
    <Product :product="activeProduct" />
    <Authentication v-if="showAuthForm" @forceRender="forceRender" />
  </div>
  <div v-else class="row justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "ProductView",
  computed: { ...mapGetters(["activeProduct", "showAuthForm"]) },
  methods: {
    ...mapActions(["getProducts"]),
    ...mapMutations(["getProduct"]),
    forceRender() {
      this.getProduct(0);
      this.$nextTick(() => this.getProduct(this.id));
    },
  },
  props: {
    id: {
      required: true,
    },
  },
  async created() {
    await this.getProducts();
    this.getProduct(this.id);
  },
});
</script>
