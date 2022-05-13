<script setup lang="ts">
import CartProduct from '@/components/CartProduct.vue'
import type { product } from '@/models/product'
</script>

<template>
  <div class="row justify-content-between card-columns" v-if="cartProducts!=null">
    <CartProduct v-for="productObj in cartProducts" :key="productObj.id" :product="productObj" />
  </div>
  <div v-else class="row justify-content-center">
    <h1>Empty Cart</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'


export default defineComponent({
  name:'CartView',
  data(){
      return {
        cartProducts: null as null|product[]
      }
  },
  computed:{...mapGetters(['authUser'])},
  methods: {...mapActions(['getProducts'])},
  created(){
    this.cartProducts = this.authUser.cart.products
  }  
})
</script>
