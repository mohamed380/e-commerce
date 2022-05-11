import type Iuser from "@/interfaces/user";
import type user from "@/models/user";

export interface IUserState {
    auth : user | null
}

export interface IUserGetters {
    authUser(state: IUserState): user|null
}
