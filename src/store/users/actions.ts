import type { product } from "@/models/product";
import type user from "@/models/user";
import userService from "@/services/userService";
import type { ActionContext } from "vuex";
import type { ActionTree } from "vuex";
import type { IRootState } from "../types";
import type { IUserState } from "./types";


export const userActions: ActionTree<IUserState, IRootState> = {

    getAuth({ commit, state }: ActionContext) {
        let authUser: user | null = userService.auth();
        commit('AUTHENTICATED', authUser);
    },

    login({ commit, state }: ActionContext, payload: { email: string, password: string }) {
        commit('AUTH_LOADING')
        try {
            let authUser: user | boolean = userService.login(payload.email, payload.password);
            if (authUser) {
                commit('AUTHENTICATED', authUser);
                return true
            } else {
                alert('email or password not right');
                commit('AUTH_LOADING')
                return false;
            }
        } catch (error) {
            //@ts-ignore
            alert(error.message);
        }
        commit('AUTH_LOADING')
        return false;
    },

    register({ commit, state }: ActionContext, registerData: { email: string, fullName: string, password: string }) {

        commit('AUTH_LOADING')
        let authUser: user | boolean = userService.register(registerData.email, registerData.fullName, registerData.password);

        if (authUser) {
            commit('AUTHENTICATED', authUser);
            return true
        }

        commit('AUTH_LOADING')
        alert('email already exists');
        return false
    },

    logout({ commit, state }: ActionContext) {

        commit('TOGGLE_LOADING')

        if (userService.logout()) {
            commit('AUTHENTICATED', null);
        } else {
            alert('not logged in');
        }

        commit('TOGGLE_LOADING')
    },

    addToCart({ commit, state }: ActionContext, product: product): boolean {

        if (!state.auth) {
            commit('AUTHENTICATE_USER');
            return false;
        }

        state.auth.cart.addToCart(product);
        commit('UPDATE_USER', state.auth);
        return true
    },

    increaseAmount({ commit, state }: ActionContext, productID: number): void {
        state.auth.cart.increaseProductAmount(productID);
        commit('UPDATE_USER', state.auth);
    },

    decreaseAmount({ commit, state }: ActionContext, productID: number): void {
        state.auth.cart.decreaseProductAmount(productID);
        console.log(state.auth.cart.products)
        commit('UPDATE_USER', state.auth);
    },

    removeItem({ commit, state }: ActionContext, productID: number): void {
        state.auth.cart.removeItem(productID);
        commit('UPDATE_USER', state.auth);
    },

    totalAmount({ commit, state }: ActionContext): number {
        return state.auth.cart.totalAmount();
    },

    proceedToCheckout({ commit, state }: ActionContext): void {
        state.auth.cart.clear();
        commit('UPDATE_USER', state.auth);
    },
}