import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelsServices, HotelData } from '../../services/hotels.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  hotelData!: HotelData;
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelsServices,
    private router: Router
  ) {
    hotelService
      .getHotel(parseInt(route.snapshot.params.id, 10))
      .subscribe((data) => {
        this.hotelData = data;
      });
  }

  ngOnInit(): void {}

  backHotels(): void {
    this.router.navigateByUrl('hotels');
  }
  logout() {
    this.router.navigateByUrl('');
  }
}
