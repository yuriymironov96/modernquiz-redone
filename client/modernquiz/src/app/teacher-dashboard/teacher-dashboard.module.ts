import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { QuizUploadComponent } from './components/quiz-upload/quiz-upload.component';
import { QuizUploadService } from './services/quiz-upload.service';
import { QuizAddComponent } from './components/quiz-add/quiz-add.component';
import {
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule
  ],
  declarations: [QuizUploadComponent, QuizAddComponent],
  exports: [QuizUploadComponent, QuizAddComponent],
  providers: [QuizUploadService]
})
export class TeacherDashboardModule {}
