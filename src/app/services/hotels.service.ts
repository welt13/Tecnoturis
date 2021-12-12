import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelsServices {
  private baseUrl = 'http://localhost:9090/hotels';

  constructor(private http: HttpClient) {}

  getHotels(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  searchHotels(hotel: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?q=${hotel}`);
  }
  searchStars(num: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?stars=${num}`);
  }
  getHotel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}

export interface HotelData {
  id: number;
  name: string;
  cityCode: string;
  available: boolean;
  stars: number;
  price: string;
}
