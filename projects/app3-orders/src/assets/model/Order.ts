import { MenuItem } from "./MenuItem";

export interface Order {
    orderId: string,
    name: string,
    phoneNumber: string,
    deliveryAddress: string,
    totalPrice: number,
    emailAddress: string,
    items: MenuItem[]
}