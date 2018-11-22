import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material';


import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizService } from './services/quiz.service';
import { StartQuizModalComponent } from './components/start-quiz-modal/start-quiz-modal.component';
import { StudentCredsModalComponent } from './components/student-creds-modal/student-creds-modal.component';
import { DeleteConfirmModalComponent } from './components/delete-confirm-modal/delete-confirm-modal.component';
import { StudentStartQuizModalComponent } from './components/student-start-quiz-modal/student-start-quiz-modal.component';
import { QuizResolverService } from './services/quiz-resolver.service';
import { QuizProgressComponent } from './components/quiz-progress/quiz-progress.component';
import { QuizCompleteConfirmComponent } from './components/quiz-complete-confirm/quiz-complete-confirm.component';
import { QuizResultsModalComponent } from './components/quiz-results-modal/quiz-results-modal.component';
import { RepassingNotificationModalComponent } from './components/repassing-notification-modal/repassing-notification-modal.component';
import { ResultsModalComponent } from './components/results-modal/results-modal.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatSliderModule,
    MatStepperModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule
  ],
  entryComponents: [
    StartQuizModalComponent,
    StudentCredsModalComponent,
    DeleteConfirmModalComponent,
    StudentStartQuizModalComponent,
    QuizCompleteConfirmComponent,
    QuizResultsModalComponent,
    RepassingNotificationModalComponent,
    ResultsModalComponent,
    ImageModalComponent
  ],
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    QuizListComponent,
    StartQuizModalComponent,
    StudentCredsModalComponent,
    DeleteConfirmModalComponent,
    StudentStartQuizModalComponent,
    QuizProgressComponent,
    QuizCompleteConfirmComponent,
    QuizResultsModalComponent,
    RepassingNotificationModalComponent,
    ResultsModalComponent,
    ImageModalComponent
  ],
  providers: [QuizService, QuizResolverService]
})
export class CommonDashboardModule { }
