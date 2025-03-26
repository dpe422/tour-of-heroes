   import { ApplicationConfig, importProvidersFrom } from '@angular/core';
    import { provideRouter, Routes } from '@angular/router';
    import { BrowserModule } from '@angular/platform-browser';
    import { HeroesComponent } from './heroes/heroes.component';
    import { DashboardComponent } from './dashboard/dashboard.component';
    import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Importa HeroDetailComponent

    const routes: Routes = [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'heroes', component: HeroesComponent }
    ];

    export const appConfig: ApplicationConfig = {
      providers: [
        provideRouter(routes),
        importProvidersFrom(BrowserModule)
      ]
    };