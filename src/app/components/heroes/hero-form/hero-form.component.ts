import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from './../models/hero.model';

@Component({
  selector: 'app-hero-form',
  templateUrl: 'hero-form.component.html',
  styleUrls: ['hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  submitted: boolean = false;
  newHero: Hero;
  @Input() hero: Hero;
  @Input() editHero: Hero;
  @Output() updateHero: EventEmitter<Hero>;

  constructor() {
    this.updateHero = new EventEmitter<Hero>();
  }

  ngOnInit(): void { }

   onUpdateHero(): void {
    const hero = new Hero(null,
      this.editHero.name,
      this.editHero.sex,
      this.editHero.birthday
    );

    this.updateHero.emit(hero);
    //this.submitted = true;
  }

  cancel(): void {
    this.editHero = null;
  }
  
}
