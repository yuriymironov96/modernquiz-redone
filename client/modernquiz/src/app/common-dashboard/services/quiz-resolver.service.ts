import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { QuizService } from './quiz.service';


@Injectable()
export class QuizResolverService implements Resolve<any> {

  constructor(private quizService: QuizService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.quizService.prepateStudentQuiz(route.paramMap.get('token'));
  }

}
