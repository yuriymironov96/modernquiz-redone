import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartQuizModalComponent } from './start-quiz-modal.component';

describe('StartQuizModalComponent', () => {
  let component: StartQuizModalComponent;
  let fixture: ComponentFixture<StartQuizModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartQuizModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartQuizModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
