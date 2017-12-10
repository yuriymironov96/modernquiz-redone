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

  prepateStudentQuiz(token: string) {
    const headers = new Headers({
      'Authorization': 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.post('/api/quizes/quizes/generate_quiz/', {
      token: token
    }, options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  submitQuiz(quiz: Object, quizToken: string) {
    const headers = new Headers({
      'Authorization': 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.post('/api/quizes/quizes/submit_results/', {
      quiz: quiz,
      token: quizToken
    }, options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  allowRepassing(quizId: number) {
    const headers = new Headers({
      'Authorization': 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.post('/api/quizes/quizes/allow_repassing/' + quizId + '/', {}, options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  viewResults(quizId: number) {
    const headers = new Headers({
      'Authorization': 'Token ' + localStorage.getItem('currentUserToken')
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.get('/api/quizes/quizes/view_results/' + quizId + '/', options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

}
