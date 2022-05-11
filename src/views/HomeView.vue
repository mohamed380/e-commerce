<script setup lang="ts">
import Product from '@/components/Product.vue'
</script>

<template>
  <div class="row justify-content-between card-columns" v-if="productList!=null">
    <Product v-for="productObj in productList" :key="productObj.id" :product="productObj" />
  </div>
  <div v-else class="row justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default defineComponent({
  name:'HomeView',
  computed:{...mapGetters(['productList'])},
  methods: {...mapActions(['getProducts'])},
  async created(){
    await this.getProducts();
  }  
})
</script>
