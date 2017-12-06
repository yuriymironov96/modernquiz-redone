import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MqNavbarComponent } from './components/mq-navbar/mq-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatToolbarModule
  ],
  declarations: [MqNavbarComponent],
  exports: [MqNavbarComponent]
})
export class NavigationModule { }
