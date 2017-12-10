import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCompleteConfirmComponent } from './quiz-complete-confirm.component';

describe('QuizCompleteConfirmComponent', () => {
  let component: QuizCompleteConfirmComponent;
  let fixture: ComponentFixture<QuizCompleteConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCompleteConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCompleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
