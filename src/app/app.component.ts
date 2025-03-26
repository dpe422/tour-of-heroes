import { Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import {RouterModule} from '@angular/router';
// import { AppRoutingModule  } from './app-routing.module';
import { CommonModule } from '@angular/common';

/* import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MessagesComponent/* , AppRoutingModule */,RouterModule,CommonModule/* HeroesComponent, MessagesComponent, AppRoutingModule  */],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tour-heroes';
}
