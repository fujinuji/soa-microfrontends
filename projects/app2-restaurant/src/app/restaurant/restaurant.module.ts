import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantComponent} from './restaurant.component';
import {RouterModule, Routes} from "@angular/router";
import {RestaurantDetailComponent} from './detail/detail.component';
import { MfeOrderComponentComponent } from './mfe-order-component/mfe-order-component.component';
import { RestaurantService } from './restaurant.service';
import { DetailService } from './detail/details.service'
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  },
  {
    path: ':id',
    component: RestaurantDetailComponent,
  },
  {
    path: ':id/order',
    component: MfeOrderComponentComponent
  }

];

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantDetailComponent,
    MfeOrderComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    RestaurantService,
    DetailService,
    HttpClient
  ]
})
export class RestaurantModule {
}
