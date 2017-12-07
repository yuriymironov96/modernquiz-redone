import { TestBed, inject } from '@angular/core/testing';

import { QuizUploadService } from './quiz-upload.service';

describe('QuizUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizUploadService]
    });
  });

  it('should be created', inject([QuizUploadService], (service: QuizUploadService) => {
    expect(service).toBeTruthy();
  }));
});
