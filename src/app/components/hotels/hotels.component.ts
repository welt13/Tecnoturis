import { Component, OnInit } from '@angular/core';
import { HotelData, HotelsServices } from '../../services/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'stars', 'price'];
  hotelsData!: HotelData[];
  search: string = '';
  numStars!: number;

  constructor(private hotelService: HotelsServices, private router: Router) {}

  ngOnInit(): void {
    this.getHotels();
  }
  searchHotels() {
    this.hotelService.searchHotels(this.search).subscribe((data) => {
      this.hotelsData = data;
    });
  }

  searchStars(value: any) {
    if (value != null) {
      this.hotelService.searchStars(parseInt(value, 10)).subscribe((data) => {
        this.hotelsData = data;
      });
    }
  }

  cleanSearch() {
    this.search = '';
    this.numStars = 0;
    this.getHotels();
  }

  getHotels() {
    this.hotelService.getHotels().subscribe((data) => {
      this.hotelsData = data;
    });
  }

  selectHotel(row: any) {
    this.router.navigateByUrl(`hotels/${row.id}`);
  }

  logout() {
    this.router.navigateByUrl('');
  }
}
