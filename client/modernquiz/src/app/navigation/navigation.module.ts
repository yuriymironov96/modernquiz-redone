import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MqNavbarComponent } from './components/mq-navbar/mq-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [MqNavbarComponent],
  exports: [MqNavbarComponent]
})
export class NavigationModule { }
