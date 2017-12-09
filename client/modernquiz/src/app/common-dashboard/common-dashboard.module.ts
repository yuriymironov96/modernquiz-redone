import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizService } from './services/quiz.service';
import { StartQuizModalComponent } from './components/start-quiz-modal/start-quiz-modal.component';
import { StudentCredsModalComponent } from './components/student-creds-modal/student-creds-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [StartQuizModalComponent, StudentCredsModalComponent],
  declarations: [HomePageComponent, AboutPageComponent, QuizListComponent, StartQuizModalComponent, StudentCredsModalComponent],
  providers: [QuizService]
})
export class CommonDashboardModule { }
