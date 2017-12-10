import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCredsModalComponent } from './student-creds-modal.component';

describe('StudentCredsModalComponent', () => {
  let component: StudentCredsModalComponent;
  let fixture: ComponentFixture<StudentCredsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCredsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCredsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
