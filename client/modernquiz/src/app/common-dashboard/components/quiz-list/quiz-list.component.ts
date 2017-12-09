import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  public QUIZES: Object[];
  private quizService: QuizService;
  public loading: boolean;
  public count: number;

  constructor(quizService: QuizService) {
    this.quizService = quizService;
    this.loading = true;
    this.quizService.get().subscribe(
      success => {
        this.loading = false;
        this.count = success.count;
        this.QUIZES = success.results;
      }
    );
  }

  ngOnInit() {
  }

  get isTeacher(): boolean {
    return localStorage.getItem('currentUserType') === 'teacher';
  }

  deleteQuiz(quizId: number) {
    this.loading = true;
    this.quizService.delete(quizId).subscribe(
      success => {
        this.quizService.get().subscribe(
          data => {
            this.loading = false;
            this.count = data.count;
            this.QUIZES = data.results;
          }
        );
      }
    );
  }

  toggleQuiz(quiz: Object) {
    this.loading = true;
    this.quizService.update(quiz['id'], {
      is_public: !quiz['is_public']
    }).subscribe(
      success => {
        this.quizService.get().subscribe(
          data => {
            this.loading = false;
            this.count = data.count;
            this.QUIZES = data.results;
          }
        );
      }
    );
  }

}
