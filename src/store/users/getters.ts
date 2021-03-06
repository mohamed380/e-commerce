import type { product } from '@/models/product'
import user from '@/models/user'
import userService from '@/services/userService'
import type { GetterTree } from 'vuex'
import type { IRootState } from '../types'
import type { IUserGetters, IUserState } from './types'

export const userGetters: GetterTree<IUserState, IRootState> & IUserGetters = {
  authUser: (state: IUserState): user | null => {
    //@ts-ignore
    return state.auth ? user.cast(state.auth) : null
  },
  showAuthForm: (state: IUserState): boolean => {
    return state.showAuthForm;
  },
  isAuthLoading: (state: IUserState): boolean => {
    return state.loading
  }
}