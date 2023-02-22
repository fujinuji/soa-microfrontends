import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'projects/app2-restaurant/src/assets/model/restaurant';
import { ActivatedRoute } from '@angular/router'
import { DetailService } from './details.service';

@Component({
  selector: 'pmo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private route : ActivatedRoute, private service: DetailService) { 
    this.route.params
  	  .subscribe((params : any) => { 
        service.get_restaurant_by_id(params['id']).subscribe(data => this.restaurant = data)
      });
  }

  ngOnInit(): void {
  }

}
