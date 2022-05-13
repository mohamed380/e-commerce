<template>
  <div class="col-6 col-md-4 col-lg-3 pb-4">
    <div class="card">
        <RouterLink
      :to="{ name: 'show-product', params: { id: product.id } }"
    >
      <img :src="product.image" class="card-img-top" />
        </RouterLink>
      <div class="card-body">
        <div class="d-flex justify-content-between w-100 my-2">
          <span class="badge bg-primary">{{ product.category }}</span>
          <span class="badge bg-success">{{ product.rating.rate }}</span>
        </div>
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <button v-if="inCart" type="button" class="btn btn-sm btn-success">
          In Cart
        </button>
        <button @click="cartClick" v-else type="button" class="btn btn-sm btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { product } from "@/models/product";
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Product",
  props: {
    product: {
      type: product,
      required: true,
    },
  },
  computed: { ...mapGetters(["authUser"]) },
  data() {
    return {
      inCart: false as boolean,
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    async cartClick() {
      let res = await this.addToCart(this.product);
      console.log(res,'xx')
      if(!!res){
        this.inCart = true;
      }
    },
  },
  created() {
    this.inCart = this.authUser
      ? !!this.authUser.cart.exists(this.product)
      : false;
  },
});
</script>