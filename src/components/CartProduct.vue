<template>
    <div class="col-6 mb-4">
  <div class="card ">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ product.category }}</h6>
      <p class="card-text">
        {{ product.description }}
      </p>
      <button @click="increase" class="btn btn-sm bg-success mx-2 px-3 py-1 text-white">+</button>
      <button @click="decrease" class="btn btn-sm bg-danger px-3 py-1 text-white">-</button>
      <span class="badge rounded-pill bg-info text-dark text-white mx-3">{{product.cartAmount}}</span>
    </div>
  </div>
  </div>

</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { product } from "@/models/product";

export default defineComponent({
  name: "CartProduct",
  props: {
    product: {
      type: product,
      required: true,
    },
  },
});
</script>

<style>
</style>