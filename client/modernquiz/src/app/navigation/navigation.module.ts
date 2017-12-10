import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MqNavbarComponent } from './components/mq-navbar/mq-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [MqNavbarComponent],
  exports: [MqNavbarComponent]
})
export class NavigationModule {
  static forRoot(IdentityService): ModuleWithProviders {
    return {
        ngModule: NavigationModule,
        providers: [
          IdentityService
        ]
    };
  }
}
