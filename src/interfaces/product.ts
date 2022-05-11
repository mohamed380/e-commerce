import type { product } from "@/models/product"

export default interface Iproduct {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    rating: Irating,
    image:string
    increaseCartAmount(): void,
    decreaseCartAmount(): void,
    castApiData(data: IAPIProduct[]): product[]
}

export interface Irating {
    rate: number,
    count: number
}

export interface IAPIProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    rating: Irating,
    image: string
}