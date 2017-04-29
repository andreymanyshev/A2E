import { Component, EventEmitter, Input, Output, HostBinding, HostListener } from '@angular/core';

import { Hero } from './../../models/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    @Input() hero: Hero;
    @Output() select: EventEmitter<Hero>;
    @Output() remove: EventEmitter<Hero>;
    @Output() edit: EventEmitter<Hero>;

    @HostBinding('class') class = 'hero';

    @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
      // console.log(event.target);
    }

    constructor() {
        this.select = new EventEmitter<Hero>();
        this.remove = new EventEmitter<Hero>();
        this.edit = new EventEmitter<Hero>();
    }

    selectHero(event: any): void {
        this.select.emit(this.hero);
    }

    removeHero(event: any): void {
        this.remove.emit(this.hero);
    }

    editHero(event: any): void {
        this.edit.emit(this.hero);
    }
}
