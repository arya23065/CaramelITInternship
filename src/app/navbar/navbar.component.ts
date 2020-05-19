import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  homeLink = "https://www.caramelit.com/index.html";
  contactLink = "https://www.caramelit.com/consortiumcontact.html";

  constructor() { }

  ngOnInit(): void {
  }

}
