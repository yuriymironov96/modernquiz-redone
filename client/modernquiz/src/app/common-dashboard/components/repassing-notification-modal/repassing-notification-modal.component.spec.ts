import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepassingNotificationModalComponent } from './repassing-notification-modal.component';

describe('RepassingNotificationModalComponent', () => {
  let component: RepassingNotificationModalComponent;
  let fixture: ComponentFixture<RepassingNotificationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepassingNotificationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepassingNotificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
