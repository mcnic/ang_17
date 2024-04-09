import { Injectable } from '@angular/core';
import { HousingLocation } from './housingLocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly urlDb = 'http://localhost:3000/locations';
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.urlDb);
    this.housingLocationList = (await data.json()) ?? [];
    return this.housingLocationList;
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.urlDb}/${id}`);
    return (await data.json()) ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
