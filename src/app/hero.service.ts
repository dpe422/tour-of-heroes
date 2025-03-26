import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Superpower } from './superpower';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    
    ;
    return of(hero);
  }
  updateHero(hero: Hero): Observable<any> {
    console.log('HeroService: updated hero id=', hero);
    this.messageService.add(`HeroService: updated hero id=${hero.id}`);
    // Simula la actualización del héroe en una API o base de datos
    const index = HEROES.findIndex(h => h.id === hero.id);
    if (index > -1) {
      console.log('HeroService: index =', index);
      HEROES[index] = hero;
      console.log('HeroService: updated HEROES=', HEROES);
    
    }

    return of(hero);
  }

  

}
