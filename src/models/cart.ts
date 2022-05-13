import type Icart from "@/interfaces/cart";
import type { product } from "./product";

export default class Cart {

    private products: product[] | null
    private productsKey: string = 'products'
    private cartKey: string = 'auth-user.cart'

    constructor(obj: Icart | null) {
        this.products = obj ? obj.products : null
    }

    public clear(): void {
        this.products = null;
    }

    public exists(productObj: product): product | null {
        if (!this.products) {
            return null;
        }
        let product = this.products.find((cartElement: product) => cartElement.id == productObj.id);
        return product == undefined ? null : product;
    }

    public addToCart(productObj: product): void {
        let cartElement = this.exists(productObj);
        if (cartElement) {
            //@ts-ignore
            this.products.every((element: product) => {
                if (element.id == cartElement.id) {
                    element.cartAmount++;
                    return false;
                }
                return true;
            })
        } else {
            productObj.cartAmount++;
            if (this.products) {
                this.products.push(productObj)
            } else {
                this.products = [productObj];
            }
        }
    }

    public increaseProductAmount(productID: number): void {
        this.products?.every((element: product) => {
            if (element.id == productID) {
                element.cartAmount++;
                return false;
            }
            return true;
        })

    }

    public decreaseProductAmount(productID: number): void {
        this.products?.every((element: product, index: number) => {
            if (element.id == productID) {

                if (element.cartAmount == 1) {
                    this.products?.splice(index, 1);
                } else {
                    element.cartAmount--;
                }

                return false;
            }
            
            return true
        })

    }

    public removeItem(ItemID: number): void {

        this.products?.every((element: product, index: number) => {
            if (element.id == ItemID) {
                this.products?.splice(index, 1);
                return false
            }
            return true
        })

    }

    public totalAmount(): number {
        let total: number = 0

        this.products?.forEach((element: product) => {
            total += (element.cartAmount * element.price);
        });


        // @ts-ignore
        return Number(total).toFixed(2)
    }
}