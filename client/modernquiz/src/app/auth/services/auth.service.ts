import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IdentityService } from '../../identity.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http, private identity: IdentityService) {}

  login(username: string, password: string) {
    return this.http.post(
      'http://localhost:8000/api/auth/token/create/',
      { username: username, password: password })
      .map((response: Response) => {
        const user = response.json();
        if (user && user.auth_token) {
          localStorage.setItem('currentUserToken', user.auth_token);
        }

        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUserToken');
  }

  getCurrrentUser() {
    return this.http.get(
      'http://localhost:8000/api/auth/me/',
      this.jwt())
      .map((response: Response) => {
        const user = response.json();
        localStorage.setItem('currentUserName', user.username);
        localStorage.setItem('currentUserType', user.user_type);
        this.identity.updateUser(user);
      });
  }

  private jwt() {
    // create authorization header with jwt token
    const currentUserToken = localStorage.getItem('currentUserToken');
    if (currentUserToken) {
      const headers = new Headers({ 'Authorization': 'Token ' + currentUserToken });
        return new RequestOptions({ headers: headers });
    }
}
}
