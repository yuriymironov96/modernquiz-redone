import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';


import { QuizUploadComponent } from './components/quiz-upload/quiz-upload.component';
import { QuizUploadService } from './services/quiz-upload.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule
  ],
  declarations: [QuizUploadComponent],
  exports: [QuizUploadComponent],
  providers: [QuizUploadService]
})
export class TeacherDashboardModule { }
