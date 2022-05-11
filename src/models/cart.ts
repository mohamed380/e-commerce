import type Icart from "@/interfaces/cart";
import { product } from "./product";

export default class cart{

    private products: product[]|null

    constructor(obj:Icart|null){
        this.products = obj ? obj.products : null 
    }

    public clear(): void {
        this.products = null;
        // localStorage.removeItem('cart-items');
    }

    public exists(productObj:product):product|null{
        if(!this.products){
            return null;
        }
        let product = this.products.find((cartElement:product) => cartElement.id == productObj.id);
        return product == undefined ? null : product;
    }

    public addToCart(productObj:product):void{
        let cartElement = this.exists(productObj);
        if(cartElement){
            this.products.every((element:product)=>{
                if(element.id == cartElement.id){
                    element.cartAmount++;
                    return false;
                }
                return true;
            })
        }else{
            productObj.cartAmount++;
            if(this.products){
                this.products.push(productObj)
            }else{
                this.products = [productObj];
            }
        }
    }
}