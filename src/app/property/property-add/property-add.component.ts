import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-add',
  standalone: true,
  imports: [],
  templateUrl: './property-add.component.html',
  styleUrl: './property-add.component.css'
})
export class PropertyAddComponent implements OnInit {

  constructor(private router: Router){

  }
  ngOnInit(): void {
      
  }

  onBack(){
    this.router.navigate(["/"]);
  }
}
