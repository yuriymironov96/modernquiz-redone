import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from '../../../identity.service';

@Component({
  selector: 'app-mq-navbar',
  templateUrl: './mq-navbar.component.html',
  styleUrls: ['./mq-navbar.component.css']
})
export class MqNavbarComponent implements OnInit {
  currentUser: Object;
  identity: IdentityService;
  router: Router;

  constructor(identity: IdentityService, router: Router) {
    this.router = router;
    this.identity = identity;
    identity.userChange.subscribe(value => { this.currentUser = value; });
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('currentUserToken');
    localStorage.removeItem('currentUserName');
    localStorage.removeItem('currentUserType');
    this.router.navigateByUrl('auth/login');
  }

  get user(): any {
    return localStorage.getItem('currentUserToken');
  }

  get userName(): any {
    return localStorage.getItem('currentUserName');
  }

  get userType(): any {
    return localStorage.getItem('currentUserType');
  }

}
