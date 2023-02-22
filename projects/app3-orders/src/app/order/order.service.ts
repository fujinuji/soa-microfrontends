import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantMenu } from '../../assets/model/RestaurantMenu';
import { Order } from '../../assets/model/Order';

@Injectable()
export class OrderService {
  baseUrl:string = "http://localhost:8765/api";
  
  constructor(protected httpClient : HttpClient) { 
  }
  
  get_menu_by_restaurant_id(id): Observable<RestaurantMenu> {
    return this.httpClient.get<RestaurantMenu>(this.baseUrl + `/restaurant/${id}/menu`);
  }

  place_order(order: Order): Observable<void> {
    return this.httpClient.post<void>(this.baseUrl + `/order`, order)
  }

  get_orders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl + `/order`)
  }
}