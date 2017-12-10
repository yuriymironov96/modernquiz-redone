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
    return this.http.get('/api/quizes/quizes/', options)
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
    return this.http.delete('/api/quizes/quizes/' + quizId + '/', options)
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
    return this.http.patch('/api/quizes/quizes/' + quizId + '/', changes, options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  prepateStudentCreds(quizId, questionsNumber: number) {
    const headers = new Headers({
      'Authorization': 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.post('/api/quizes/quizes/generate_creds/', {
      quiz_id: quizId,
      questions_number: questionsNumber
    }, options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

}
