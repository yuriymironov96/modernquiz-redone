import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuizService {

  constructor(private http: Http) { }

  get() {
    const headers = new Headers({
      'Authorization': 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.get('http://localhost:8000/api/quizes/quizes/', options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  delete(quizId) {
    const headers = new Headers({
      'Authorization': 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.delete('http://localhost:8000/api/quizes/quizes/' + quizId + '/', options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  update(quizId, changes) {
    const headers = new Headers({
      'Authorization': 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.patch('http://localhost:8000/api/quizes/quizes/' + quizId + '/', changes, options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

}
