import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomePageComponent, AboutPageComponent]
})
export class CommonDashboardModule { }
