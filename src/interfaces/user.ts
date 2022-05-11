import type cart from "@/models/cart";
import type Icart from "./cart";

export default interface Iuser{
    fullName: string,
    email: string,
    password: string,
    loggedinTime: Date,
    cart: Icart
}