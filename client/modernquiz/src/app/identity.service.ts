import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class IdentityService {
  // public currentUser: Observable<Object>;
  // public isAuthenticated = false;
  // private observer: Observer<any>;

  // constructor() {
  //   this.currentUser.subscribe(
  //     (value) => { this.currentUser = value; });
  //   this.currentUser = new Observable(observer => this.observer = observer);
  // }

  // public updateValue(value) {
  //   if (this.observer) {

  //     this.observer.next(value);
  //   }
  // }

  currentUser: Object;
  userChange: Subject<Object> = new Subject<Object>();
  constructor()  {
    this.userChange.subscribe((value) => {
      this.currentUser = value;
    });
  }

  updateUser(newUser) {
    this.userChange.next(newUser);
  }
}
