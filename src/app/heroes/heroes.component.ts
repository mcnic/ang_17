import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HEROES } from '../mock-heroes';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
