import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { QuizCompleteConfirmComponent } from '../quiz-complete-confirm/quiz-complete-confirm.component';
import { QuizService } from '../../services/quiz.service';
import { QuizResultsModalComponent } from '../quiz-results-modal/quiz-results-modal.component';

@Component({
  selector: 'app-quiz-progress',
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.css']
})
export class QuizProgressComponent implements OnInit {

  quiz;
  results = {};
  formGroupList: any[];

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, private quizService: QuizService) { }

  ngOnInit() {
    this.quiz = this.route.snapshot.data.quiz;
  }

  toggleCheckbox(question, answer) {
    this.results[question['question_id']] = this.results[question['question_id']] || [];
    const index = this.results[question['question_id']].indexOf(answer['id']);
    if (index >= 0) {
      this.results[question['question_id']].splice(index, 1);
    } else {
      this.results[question['question_id']].push(answer['id']);
    }
  }

  submit() {
    const dialogRef = this.dialog.open(QuizCompleteConfirmComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.quizService.submitQuiz(
          this.results,
          this.quiz['token']
        ).subscribe(
          success => {
            this.router.navigateByUrl('home').then(
              navigated => {
                const finalDialogRef = this.dialog.open(QuizResultsModalComponent, {
                  width: '250px',
                  data: {
                    studentMark: success['student_mark'],
                    maxMark: success['max_mark'],
                  }
                });
              }
            );
          }
        );
      }
    });
  }

}
