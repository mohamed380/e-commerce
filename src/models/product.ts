import type { IAPIProduct, Irating } from "@/interfaces/product";
import type Iproduct from "@/interfaces/product";

export class product implements Iproduct{

    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    cartAmount: number
    rating: Irating;
    image: string;

    constructor(object: IAPIProduct) {
        this.id = object.id;
        this.title = object.title;
        this.description = object.description;
        this.price = object.price;
        this.category = object.category;
        this.rating = object.rating;
        this.image = object.image;
        this.cartAmount = 0
    }

    public increaseCartAmount()
    {
        this.cartAmount++;
        //update localStorage
    }

    public decreaseCartAmount()
    {
        this.cartAmount = this.cartAmount > 0 ? this.cartAmount-- : 0;
        //update localStorage
    }

    public static castApiData(data: IAPIProduct[]): product[]
    {
        let result : product[] = Array();
        data.forEach(function (object: IAPIProduct, index: number) {
            result.push(new product(object))
        });
        
        return result;
    }
}