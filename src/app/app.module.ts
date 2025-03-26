import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// import { AppRoutingModule } from './app-routing.module'; // Elimina esta importación

@NgModule({

  imports: [
    BrowserModule,
    // AppRoutingModule // Elimina esta importación
  ],
  providers: [],

})
export class AppModule { }
