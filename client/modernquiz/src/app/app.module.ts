import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';

import { NavigationModule } from './navigation/navigation.module';

import { CommonDashboardModule } from './common-dashboard/common-dashboard.module';
import { HomePageComponent } from './common-dashboard/components/home-page/home-page.component';

import { TeacherDashboardModule } from './teacher-dashboard/teacher-dashboard.module';
import { QuizUploadComponent } from './teacher-dashboard/components/quiz-upload/quiz-upload.component';

import { AppComponent } from './app.component';
import { IdentityService } from './identity.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { AboutPageComponent } from './common-dashboard/components/about-page/about-page.component';
import { QuizProgressComponent } from './common-dashboard/components/quiz-progress/quiz-progress.component';
import { QuizResolverService } from './common-dashboard/services/quiz-resolver.service';


export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'import',
    component: QuizUploadComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'quiz/:token',
    component: QuizProgressComponent,
    resolve: {
      quiz: QuizResolverService
    },
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
    AuthModule.forRoot(IdentityService),
    NavigationModule.forRoot(IdentityService),
    CommonDashboardModule,
    TeacherDashboardModule
  ],
  providers: [IdentityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
