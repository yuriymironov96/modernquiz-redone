import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MqNavbarComponent } from './mq-navbar.component';

describe('MqNavbarComponent', () => {
  let component: MqNavbarComponent;
  let fixture: ComponentFixture<MqNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MqNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MqNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
