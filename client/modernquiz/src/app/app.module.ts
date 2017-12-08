import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';

import { NavigationModule } from './navigation/navigation.module';

import { CommonDashboardModule } from './common-dashboard/common-dashboard.module';
import { HomePageComponent } from './common-dashboard/components/home-page/home-page.component';

import { TeacherDashboardModule } from './teacher-dashboard/teacher-dashboard.module';
import { QuizUploadComponent } from './teacher-dashboard/components/quiz-upload/quiz-upload.component';

import { AppComponent } from './app.component';


export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'import',
    component: QuizUploadComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    NavigationModule,
    CommonDashboardModule,
    TeacherDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
