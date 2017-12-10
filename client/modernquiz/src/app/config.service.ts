import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class ConfigService {

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
