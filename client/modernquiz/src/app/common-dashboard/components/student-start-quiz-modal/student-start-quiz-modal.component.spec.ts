import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStartQuizModalComponent } from './student-start-quiz-modal.component';

describe('StudentStartQuizModalComponent', () => {
  let component: StudentStartQuizModalComponent;
  let fixture: ComponentFixture<StudentStartQuizModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentStartQuizModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStartQuizModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
