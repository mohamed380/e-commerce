
import { createStore } from "vuex";
import { rootGetters } from "./getters";
import { mutations } from "./mutations";
import { productModule } from "./products";
import { rootState } from "./state";
import { userModule } from "./users";

export const store = createStore({
    state: rootState,
    getters: rootGetters,
    mutations: mutations,
    modules : {
       user: userModule,
       product: productModule
    }
})