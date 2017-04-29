import {Component,Input,Output,OnInit,ViewChild,EventEmitter,ChangeDetectionStrategy} from '@angular/core';

import { Hero } from './../models/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  @Input()  heroes: Array<Hero>;
  @Output() select: EventEmitter<Hero>;
  @Output() remove: EventEmitter<Hero>;
  @Output() edit: EventEmitter<Hero>;
  @Output() add: EventEmitter<Hero>;

  constructor() {
    this.select = new EventEmitter();
    this.remove = new EventEmitter();
    this.edit = new EventEmitter();
    this.add = new EventEmitter();
  }

  ngOnInit() { }

  onSelectHero(hero: Hero): void {
    this.select.emit(hero);
  }

  onRemoveHero(hero: Hero): void {
    this.remove.emit(hero);
  }

  onEditHero(hero: Hero): void {
    this.edit.emit(hero);
  }

  addHero(): void {
    this.add.emit();
  }

}
