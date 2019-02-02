import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuizUploadService {
  constructor(private http: Http) {}

  upload(files, parameters) {
    const headers = new Headers({
      Authorization: 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers,
      params: parameters
    });
    return this.http
      .post('/api/quizes/quizes/create_from_xml/', files, options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  add(quiz) {
    const headers = new Headers({
      Authorization: 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http
      .post('/api/quizes/quizes/create_quiz_from_json/', quiz, options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }
}
