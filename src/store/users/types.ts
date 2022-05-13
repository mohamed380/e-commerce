import type Iuser from "@/interfaces/user";
import type user from "@/models/user";

export interface IUserState {
    auth: user | null,
    showAuthForm: boolean,
    loading: boolean
}

export interface IUserGetters {
    authUser(state: IUserState): user | null,
    showAuthForm(state: IUserState): boolean,
    isAuthLoading(state: IUserState): boolean
}
