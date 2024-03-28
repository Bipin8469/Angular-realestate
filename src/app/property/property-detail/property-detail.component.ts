import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent implements OnInit{
  public propertyID: number = 0;

  constructor(public route: ActivatedRoute){

  }
  ngOnInit(): void {
      this.propertyID = this.route.snapshot.params["ID"];
  }
}
