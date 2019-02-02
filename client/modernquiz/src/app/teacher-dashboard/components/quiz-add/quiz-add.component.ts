import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  group
} from '@angular/animations';

import { QuizUploadService } from '../../services/quiz-upload.service';

@Component({
  selector: 'app-quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.css']
})
export class QuizAddComponent {
  loading = false;
  completed = false;
  errors = false;
  quizUploadService: QuizUploadService;
  form = {
    questions: []
  };

  constructor(quizUploadService: QuizUploadService) {
    this.quizUploadService = quizUploadService;
  }

  onSubmit(saveAndContinue) {
    this.loading = true;

    this.quizUploadService.add(this.form).subscribe(
      success => {
        this.loading = false;
        this.completed = true;
        if (!saveAndContinue) {
          this.form = {
            questions: []
          };
        }
      },
      error => {
        this.loading = false;
        this.errors = true;
      }
    );
  }

  addQuestion() {
    this.form.questions.push({
      question_type: 'single_choice',
      answers: []
    });
  }

  addAnswer(question) {
    question.answers.push({});
  }

  deleteAnswer(answer, question) {
    question.answers.splice(question.answers.indexOf(answer), 1);
  }

  deleteQuestion(question) {
    this.form.questions.splice(this.form.questions.indexOf(question), 1);
  }
}
