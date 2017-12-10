import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get userName(): string {
    return localStorage.getItem('currentUserName');
  }

  get userType(): string {
    return localStorage.getItem('currentUserType');
  }

}
