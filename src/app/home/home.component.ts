import { Component, OnInit } from '@angular/core';
import { HousingLocationComponent } from '../housingLocation/housingLocation.component';
import { HousingLocation } from '../housingLocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor(readonly housingService: HousingService) {
    this.housingLocationList = housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    console.log('filter', text);
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter((e) =>
      e.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  ngOnInit() {}
}
