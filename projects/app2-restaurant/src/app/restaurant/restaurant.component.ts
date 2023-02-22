import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../assets/model/restaurant';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'pmo-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.less'],
})
export class RestaurantComponent implements OnInit {

  showItems = false;
  resturants: Restaurant[] = []

  constructor(private restaurantService: RestaurantService) { 
    restaurantService.get_restaurants().subscribe(data => {
      this.resturants = data
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showItems = !this.showItems;
    }, 1000);
  }
}
