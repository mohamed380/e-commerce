import { product } from "@/models/product";
import axios from "axios";
import type { ActionContext } from "vuex";
import type { ActionTree } from "vuex";
import type { IRootState } from "../types";
import type { IProductState } from "./types";


export const productActions: ActionTree<IProductState, IRootState> = {

    async getProducts({ commit, state }: ActionContext) {
        if (!state.products) {
            commit('TOGGLE_LOADING');
            await axios.get('https://fakestoreapi.com/products').then((data)=>{
                let products: product[] = product.castApiData(data.data);
                commit('SET_PRODUCTS', products);
            }).catch((res)=>{
                alert('Network error')
            });
            commit('TOGGLE_LOADING');
        }
    }

}