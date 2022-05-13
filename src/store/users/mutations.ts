import type { product } from "@/models/product";
import type user from "@/models/user";
import userService from "@/services/userService";
import type { MutationTree } from "vuex";
import type { IUserState } from "./types";

export const userMutations: MutationTree<IUserState> = {
    AUTHENTICATED(state: IUserState, user: user) {
        state.auth = user
        state.loading = false
        state.showAuthForm = false
    },
    UPDATE_USER(state: IUserState, user: user) {
        state.auth = user
        userService.updateAuth(user);
    },
    AUTHENTICATE_USER(state: IUserState) {
        state.showAuthForm = !state.showAuthForm
    },
    AUTH_LOADING(state: IUserState) {
        state.loading = !state.loading
    }
}