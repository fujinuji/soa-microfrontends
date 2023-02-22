import { Component, OnInit } from '@angular/core';
import { Order } from 'projects/app3-orders/src/assets/model/Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'pmo-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  orders: Order[]
  
  constructor(private service: OrderService) {
    service.get_orders().subscribe(data =>
      this.orders = data
    )
    // this.orders = [
    //   {
    //     orderId: "test",
    //     name: "Sir Pleasse stop",
    //     phoneNumber: "41515616584",
    //     deliveryAddress: "Strada mare",
    //     totalPrice: 100,
    //     emailAddress: "test",
    //     items: [
    //       {
    //         itemName: "string",
    //         itemPrice: 100,
    //         isDinner: false,
    //         itemId: "aa",
    //         isSelected: false
    //       },
    //       {
    //         itemName: "string",
    //         itemPrice: 100,
    //         isDinner: false,
    //         itemId: "aa",
    //         isSelected: false
    //       },
    //       {
    //         itemName: "string",
    //         itemPrice: 100,
    //         isDinner: false,
    //         itemId: "aa",
    //         isSelected: false
    //       },
    //       {
    //         itemName: "string",
    //         itemPrice: 100,
    //         isDinner: false,
    //         itemId: "aa",
    //         isSelected: false
    //       },
    //       {
    //         itemName: "string",
    //         itemPrice: 100,
    //         isDinner: false,
    //         itemId: "aa",
    //         isSelected: false
    //       }
    //     ]
    //   }
    // ]
   }

  ngOnInit(): void {
  }

}
