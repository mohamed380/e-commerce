import { userActions } from "./actions"
import { userGetters } from "./getters"
import { userMutations } from "./mutations"
import { userState } from "./state"

export const userModule = {
    state: userState,
    getters: userGetters,
    actions: userActions,
    mutations: userMutations
}