<template>
    <div class="col-6 col-md-4 col-lg-3 pb-4">
        <div class="card" >
            <img :src="product.image" class="card-img-top">
            <div class="card-body">
                <div class="d-flex justify-content-between w-100">
                    <span class="badge badge-danger">{{ product.category }}</span>
                    <span class="badge badge-success">{{ product.rating.rate }}</span>
                </div>
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <button v-if="inCart" type="button" class="btn btn-success">Added to Cart</button>
                <button @click="cartClick" v-else type="button" class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { product } from '@/models/product'
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default defineComponent({
    name:'Product',
    props:{
        product:{
            type: product,
            required: true
        }
    },
    computed:{...mapGetters(['authUser'])},
    data(){
        return {
            inCart: false as boolean
        }
    },
    methods:{
        ...mapActions({addToCart:'addToCart'}),
        cartClick(){
            this.addToCart(this.product);
            this.inCart = true
        }
    },
    created(){
        this.inCart = this.authUser ? !!this.authUser.cart.exists(this.product) : false;
    }
})
</script>