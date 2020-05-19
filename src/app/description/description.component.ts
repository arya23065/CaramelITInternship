import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

   description = "Caramel IT Services offers specialized business and custom software solutions, which was designed to meet rapidly increasing market demands and customer-centric solutions. Its main activity is to partner with CMMI Level 3, 4 & 5 organizations and provide a collaboration platform to build and then transfer technological innovations to its customers through consortium eco system.";

  constructor() { }

  ngOnInit(): void {
  }

}
