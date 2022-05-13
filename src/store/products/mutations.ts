import type { product } from "@/models/product";
import type { MutationTree } from "vuex";
import type { IProductState } from "./types";


export const productMutations: MutationTree<IProductState> = {
    SET_PRODUCTS(state:IProductState, products: product[]){
        state.products = products
    },
    getProduct(state: IProductState, productID: number){
        let product = state.products?.find((productObj: product) => productObj.id == productID);
        state.activeProduct = product == undefined ? null : product;
    }
}