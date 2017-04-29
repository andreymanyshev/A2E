import { Component, OnInit } from '@angular/core';

import { Hero } from './models/hero.model';
import { HeroesService } from './services';


@Component({
  selector: 'heroes-component',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  hero: Hero;
  heroes: Array<Hero>;
  selectedHero: Hero;
  editHero: Hero;

  constructor(
    public heroesService: HeroesService
  ) { }

  ngOnInit() {
    //this.hero = this.heroesService.getHero();
    this.heroes = this.heroesService.getHeroes();
    //this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
    this.selectedHero = null;
    this.editHero = null;
  }

  onUpdateHero(hero: Hero): void {
    let i = -1;

    this.heroes.forEach((item, index) => {
      if (item.name === hero.name ) {
        i = index;
        return false;
      }
    });

    if (i > -1) {
      this.heroes.splice(i, 1, hero);
    } else {
      this.heroes.push(hero);
    }

    this.editHero = null;
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
    this.editHero = null;
  }

  onRemoveHero(hero: Hero): void {
    //this.heroesService.removeHero(hero);
    let idx;

    this.heroes.forEach( (x, index) => {
      if (x.name === hero.name) {
        idx = index;
      }
    });

    this.heroes.splice(idx, 1);

    this.selectedHero = null;
    this.editHero = null;
  }

  onEditHero(hero: Hero): void {
    this.selectedHero = null;
    this.editHero = hero;
  }

  onAddHero(){
    this.selectedHero = null;
    this.editHero = new Hero(null, "", "", null);
  }
}
