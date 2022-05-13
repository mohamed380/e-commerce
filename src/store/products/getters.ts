import type { GetterTree } from 'vuex'
import type { IRootState } from '../types'
import type { IProductGetters, IProductState } from './types'

export const productGetters: GetterTree<IProductState, IRootState> & IProductGetters = {
  activeProduct: (state: IProductState) => {  
      return state.activeProduct
  },
  productList: (state: IProductState) => {
      return state.products
  },
}
