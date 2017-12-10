import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultsModalComponent } from './quiz-results-modal.component';

describe('QuizResultsModalComponent', () => {
  let component: QuizResultsModalComponent;
  let fixture: ComponentFixture<QuizResultsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizResultsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResultsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
