import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { /* UpperCasePipe, */NgFor } from '@angular/common';
/* import { FormsModule } from '@angular/forms'; */
/* import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'; */
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';
// import { AppRoutingModule } from '../app-routing.module'; 


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [/* UpperCasePipe, */ /* AppRoutingModule, */CommonModule,RouterModule/* ,HeroDetailComponent */],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  /* hero1: Hero = {
    id: 1,
    name: 'Windstorm'
  };
   */ /* heroes = HEROES */;
   heroes: Hero[] = [];
  //  selectedHero?: Hero;

   constructor(private heroService: HeroService) {}

   ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
 /*  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  } */

}
