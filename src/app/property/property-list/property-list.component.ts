import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../../property/property-card/property-card.component';

import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [PropertyCardComponent, CommonModule],
  templateUrl: 'property-list.component.html',
  styleUrl: './property-list.component.css',
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty> = [];

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {

    this.housingService.getAllProperties().subscribe({
      next: (data: IProperty[]) => {
        this.properties = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
