import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import { Superpower } from '../superpower';
import { HeroPowersComponent } from '../hero-powers/hero-powers.component';
import { CommonModule } from '@angular/common';
// import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule,CommonModule,HeroPowersComponent],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined;
  superpowers: Superpower[] = []; // Inicializa la lista de superpoderes
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero =>{ this.hero = hero;
        this.superpowers = hero.superpowers || [];} // Carga los superpoderes del héroe
      );
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.hero.superpowers = this.superpowers; // Guarda los superpoderes actualizados
      console.log('Superpowers saved:', this.hero);
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  updateSuperpowers(newSuperpowers: Superpower[]) {
    console.log('Superpowers updated:', newSuperpowers);
    this.superpowers = newSuperpowers;
  }  
}
