<script setup lang="ts">
import CartProduct from "@/components/CartProduct.vue";
import type { product } from "@/models/product";
</script>

<template>
  <div
    v-if="cartProducts != null && cartProducts.length"
    class="row justify-content-between card-columns"
  >
    <CartProduct
      v-for="productObj in cartProducts"
      :key="productObj.id"
      :product="productObj"
    />
    <div class="d-flex align-middle justify-content-center">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        @click="showTotalAmount"
        data-bs-target="#exampleModal"
      >
        Order Now!
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Total Amount</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <span class="badge bg-warning text-dark"
                >{{ totalAmountVal }}$</span
              >
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                @click="proceedToCheckout"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="row justify-content-center">
    <h1>Empty Cart</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "CartView",
  data() {
    return {
      totalAmountVal: 0 as number,
    };
  },
  computed: { ...mapGetters(["authUser"]),
  cartProducts (){
    return this.authUser.cart.products
  }
  },
  methods: {
    ...mapActions(["getProducts", "totalAmount", "proceedToCheckout"]),
    async showTotalAmount() {
      this.totalAmountVal = await this.totalAmount();
    },
  }
});
</script>
