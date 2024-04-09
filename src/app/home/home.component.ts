import { Component } from '@angular/core';
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
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor(readonly housingService: HousingService) {
    housingService.getAllHousingLocations().then((res) => {
      this.housingLocationList = res;
      this.filteredLocationList = this.housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter((e) =>
      e.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
