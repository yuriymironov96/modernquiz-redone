import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { QuizService } from '../../services/quiz.service';
import { StartQuizModalComponent } from '../start-quiz-modal/start-quiz-modal.component';
import { StudentStartQuizModalComponent } from '../student-start-quiz-modal/student-start-quiz-modal.component';
import { StudentCredsModalComponent } from '../student-creds-modal/student-creds-modal.component';
import { DeleteConfirmModalComponent } from '../delete-confirm-modal/delete-confirm-modal.component';
import { BehaviorSubject } from 'rxjs/Rx';

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

  constructor(quizService: QuizService, public dialog: MatDialog) {
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

  startQuiz(quiz: Object) {
    const dialogRef = this.dialog.open(StudentStartQuizModalComponent, {
      width: '250px',
      data: { name: quiz['title'] }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  deleteQuiz(quiz: Object) {
    const dialogRef = this.dialog.open(DeleteConfirmModalComponent, {
      width: '250px',
      data: { name: quiz['title'] }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true;
        this.quizService.delete(quiz['id']).subscribe(
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
    });
  }

  toggleQuiz(quiz: Object) {
    if (!quiz['is_public']) {
      this.openConfirmDialog(quiz);
    } else {
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

  openConfirmDialog(quiz): void {
    const dialogRef = this.dialog.open(StartQuizModalComponent, {
      width: '250px',
      data: { name: quiz['title'], 'question_count': quiz['question_count'] }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== false) {
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
                this.openCredsDialog(quiz, result);
              }
            );
          }
        );
      }
    });
  }

  openCredsDialog(quiz: Object, result: number): void {
    this.quizService.prepateStudentCreds(quiz['id'], result).subscribe(
      success => {
        const dialogRef = this.dialog.open(StudentCredsModalComponent, {
          width: '500px',
          data: { creds: success.creds }
        });
      }
    );
  }

}
