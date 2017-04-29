import { Injectable } from '@angular/core';

import { Hero } from './../models/hero.model';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroesService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
