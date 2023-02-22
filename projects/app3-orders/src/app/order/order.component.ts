import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../assets/model/MenuItem';
import { RestaurantMenu } from '../../assets/model/RestaurantMenu';
import { OrderService } from './order.service';
import { ActivatedRoute } from '@angular/router'
import { Order } from '../../assets/model/Order';

@Component({
  selector: 'pmo-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  restaurantMenu: RestaurantMenu
  price: number

  selectedTab = 0;
  orderComplete = false;
  cart: MenuItem[]
  order: Order

  constructor(private service: OrderService, private route : ActivatedRoute) { 
    this.route.params
  	  .subscribe((params : any) => { 
        this.service.get_menu_by_restaurant_id(params['id']).subscribe(data => this.restaurantMenu = data)
      });

    this.price = 0
    this.cart = []
    this.order = {
      orderId: "",
        name: "",
        phoneNumber: "",
        deliveryAddress: "",
        totalPrice: 0,
        emailAddress: "",
        items: []
    }
  }

  ngOnInit(): void {
  }

  addCart(item): void { 
    if (!item.isSelected) {
      this.cart.push(item)
      item.isSelected = true
    } else {
      item.isSelected = false
      this.cart = this.cart.filter(c => c !== item) 
    }

    this.price = 0
    this.cart.forEach((c) => this.price += c.itemPrice)
  }

  sendOrder(): void {
    this.order.items = this.cart
    this.order.totalPrice = this.price
    console.log(this.order)
    this.service.place_order(this.order).subscribe(()=>{

    });
    this.orderComplete = true
  }

  onTypeName(name: any){
    this.order.name = name
  }

  onTypePhoneNumber(phoneNumber: any){
    this.order.phoneNumber = phoneNumber
  }

  onTypeDeliveryAddress(deliveryAddress: any){
    this.order.deliveryAddress = deliveryAddress
  }

  onTypeEmailAddress(emailAddress: any){
    this.order.emailAddress = emailAddress
  }
}
