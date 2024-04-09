import { Component, Input, OnInit } from '@angular/core';
import { HousingLocation } from '../housingLocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housingLocation.component.html',
  styleUrls: ['./housingLocation.component.css'],
  standalone: true,
})
export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!: HousingLocation;

  constructor() {}

  ngOnInit() {}
}
