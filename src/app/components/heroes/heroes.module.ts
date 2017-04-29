import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListComponent } from './hero-list';
import { HeroFormComponent } from './hero-form';
import { HeroComponent } from './hero-list/hero';
import { HeroesComponent } from './heroes.component';

import { HeroesService } from './services/heroes.service';

import { HeroFilter } from './pipes/hero-filter.pipe';

import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroFormComponent,
    HeroComponent,
    HeroesComponent,
    HighlightDirective,
    HeroFilter
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  exports: [
    HeroListComponent,
    HeroFormComponent,
    HeroesComponent
  ]
})
export class HeroesModule { }
