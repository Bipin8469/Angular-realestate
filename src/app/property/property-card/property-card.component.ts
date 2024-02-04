import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css',
})
export class PropertyCardComponent {
  Property: any = {
    ID: 1,
    Name: 'House Name',
    Type: '3 BHK',
    Price: 15000,
  };
}
