import { product } from "@/models/product";
import axios from "axios";
import type { ActionContext } from "vuex";
import type { ActionTree } from "vuex";
import type { IRootState } from "../types";
import type { IProductState } from "./types";


export const productActions: ActionTree<IProductState, IRootState> = {

    async getProducts({commit, state}: ActionContext){
        if(!state.products){
            commit('TOGGLE_LOADING');
            const { data } = await axios.get('https://fakestoreapi.com/products');
            let products: product[] = product.castApiData(data);
            console.log(products);
            commit('TOGGLE_LOADING');
            commit('SET_PRODUCTS', products);
        }
    }

}