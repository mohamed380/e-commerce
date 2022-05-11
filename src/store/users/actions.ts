import { product } from "@/models/product";
import type user from "@/models/user";
import userService from "@/services/userService";
import type { ActionContext } from "vuex";
import type { ActionTree } from "vuex";
import type { IRootState } from "../types";
import type { IUserState } from "./types";


export const userActions: ActionTree<IUserState, IRootState> = {

    getAuth({commit, state}: ActionContext){
        let authUser:user|null = userService.auth();
        commit('AUTHENTICATED', authUser);
    },

    login({commit, state}: ActionContext, payload:{email:string, password:string}){
        commit('TOGGLE_LOADING')
        try {
            let authUser:user|boolean = userService.login(payload.email, payload.password);
            if(authUser){
                console.log(authUser);
                commit('AUTHENTICATED', authUser);
            }else{
                alert('email or password not right');
            }
            commit('TOGGLE_LOADING')
        } catch (error) {
            //@ts-ignore
            alert(error.message);
        }

    },

    register({commit, state}: ActionContext, registerData:{email:string, fullName:string, password:string}){
        commit('TOGGLE_LOADING')
        let authUser:user|boolean = userService.register(registerData.email, registerData.fullName, registerData.password);
        if(authUser){
            commit('AUTHENTICATED', authUser);
        }else{
            alert('email already exists');
        }
        commit('TOGGLE_LOADING')
    },

    logout({commit, state}: ActionContext){

        commit('TOGGLE_LOADING')
        if(userService.logout()){
            commit('AUTHENTICATED', null);
        }else{
            alert('not logged in');
        }
        commit('TOGGLE_LOADING')
    },

    addToCart({commit, state}: ActionContext, product:product){
        
        if(!state.auth){
            commit('AUTHENTICATE_USER');
            return;
        }
        
        state.auth.cart.addToCart(product);
        commit('UPDATE_USER', state.auth);
    }
}