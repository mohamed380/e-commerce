import type { product } from "@/models/product";
import type { MutationTree } from "vuex";
import type { IProductState } from "./types";


export const productMutations: MutationTree<IProductState> = {
    SET_PRODUCTS(state:IProductState, products: product[]){
        state.products = products
    }
}