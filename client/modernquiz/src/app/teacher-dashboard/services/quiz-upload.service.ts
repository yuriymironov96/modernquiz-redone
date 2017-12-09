import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuizUploadService {

  constructor(private http: Http) { }

  upload(files, parameters) {
    const headers = new Headers({
      'Authorization': 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers,
      params: parameters
    });
    return this.http.post('http://localhost:8000/api/quizes/quizes/create_from_xml/', files, options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));

  }

}
