import { productActions } from "./actions"
import { productGetters } from "./getters"
import { productMutations } from "./mutations"
import { productState } from "./state"

export const productModule = {
    state: productState,
    getters: productGetters,
    actions: productActions,
    mutations: productMutations
}