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
  housingLocationList = this.housingService.getAllHousingLocations();

  constructor(readonly housingService: HousingService) {}

  ngOnInit() {}
}
