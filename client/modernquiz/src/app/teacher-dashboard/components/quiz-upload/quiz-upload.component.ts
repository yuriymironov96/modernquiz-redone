import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, style, transition, animate, group } from '@angular/animations';

import { QuizUploadService } from '../../services/quiz-upload.service';


@Component({
  selector: 'app-quiz-upload',
  templateUrl: './quiz-upload.component.html',
  styleUrls: ['./quiz-upload.component.css']
})
export class QuizUploadComponent {
  form: FormGroup;
  loading: boolean = false;
  completed: boolean = false;
  quizUploadService: QuizUploadService;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, quizUploadService: QuizUploadService) {
    this.quizUploadService = quizUploadService;
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      quizFile: null
    });
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('quizFile').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('quizFile', this.form.get('quizFile').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;

    this.quizUploadService.upload(formModel, {}).subscribe(
      success => {
        alert('done!');
        this.loading = false;
        this.completed = true;
        this.createForm();
      },
      error => {
        alert('something went wrong! ' + error.ExceptionMessage);
        this.loading = false;
        this.completed = true;
        this.createForm();
      });
  }

  clearFile() {
    this.form.get('quizFile').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}
