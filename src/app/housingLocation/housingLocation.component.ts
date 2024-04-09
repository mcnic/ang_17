import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housingLocation';
import { HousingService } from '../housing.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housingLocation.component.html',
  styleUrls: ['./housingLocation.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
