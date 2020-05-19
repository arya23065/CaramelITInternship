import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-divider',
  templateUrl: './success-divider.component.html',
  styleUrls: ['./success-divider.component.css']
})
export class SuccessDividerComponent implements OnInit {

  header = "Own your success";
  description = "As a Collaboration Platform for Academy, Custom Solutions, Services and Products, we provide integrated learning and management system to each individual/stakeholder to build and own their career goals and future.";

  constructor() { }

  ngOnInit(): void {
  }

}
