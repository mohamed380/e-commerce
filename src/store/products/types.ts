import Iproduct from "@/interfaces/product";
import { product } from "@/models/product";

export interface IProductState {
    products : product[]|null ,
    activeProduct: product|null
}
export interface IProductGetters {
    activeProduct(state: IProductState): product|null,
    productList(state: IProductState): product[]|null,
}

// export interface IProductActions {
//     getProducts({commit}): void,
// }