import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {  HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [CommonModule, 
    RouterOutlet,
    PropertyCardComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    NavBarComponent,
    HttpClientModule,
    RouterModule,
    RouterLink
  ],
  providers:[
    HousingService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-realestate';
}
