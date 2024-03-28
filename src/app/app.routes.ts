import { Routes } from '@angular/router';
import { PropertyAddComponent } from './property/property-add/property-add.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

export const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'add-property', component: PropertyAddComponent },
  { path: 'property-details/:ID', component: PropertyDetailComponent },
];
