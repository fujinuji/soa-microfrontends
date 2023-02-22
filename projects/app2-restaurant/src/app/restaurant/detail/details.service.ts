import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../../../assets/model/restaurant';
import { Observable } from 'rxjs';

@Injectable()
export class DetailService {
  baseUrl:string = "http://localhost:8765/api";
  
  constructor(private httpClient : HttpClient) { 
    
  }
  
  get_restaurant_by_id(id): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(this.baseUrl + `/restaurant/${id}`);
  }
}