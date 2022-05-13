import type Icart from "@/interfaces/cart";
import type Iuser from "@/interfaces/user";
import cart from "./cart";
import type { product } from "./product";

export default class user{

    email: string;
    fullName: string;
    password: string;
    loggedinTime: Date;
    cart: cart

    constructor(email: string, fullName: string, password: string, cartObj: Icart|null = null) {
        this.email = email;
        this.fullName = fullName;
        this.password = password;
        this.loggedinTime = new Date();
        // login through local storage
        this.cart = new cart(cartObj);
    }

    public static cast(obj:Iuser){
        return new user(obj.email, obj.fullName, obj.password, obj.cart)
    }
}