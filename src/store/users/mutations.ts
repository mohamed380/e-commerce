import type { product } from "@/models/product";
import type user from "@/models/user";
import userService from "@/services/userService";
import type { MutationTree } from "vuex";
import type { IUserState } from "./types";


export const userMutations: MutationTree<IUserState> = {
    AUTHENTICATED(state:IUserState, user: user){
        state.auth = user
    },
    UPDATE_USER(state:IUserState, user: user){
        state.auth = user
        userService.updateAuth(user);
    }
}