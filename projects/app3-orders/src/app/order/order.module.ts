import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from "./order.component";
import {RouterModule, Routes} from "@angular/router";
import { OrderHistoryComponent } from './order-history/order-history.component';
import { DetailComponent } from './detail/detail.component';
import { OrderService } from './order.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },
  {
    path: 'restaurants/:id',
    component: OrderComponent
  }
]

@NgModule({
  declarations: [
    OrderComponent,
    OrderHistoryComponent,
    DetailComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    HttpClient,
    OrderService
  ]
})
export class OrderModule { }
