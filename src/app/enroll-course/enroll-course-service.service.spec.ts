import { TestBed } from '@angular/core/testing';

import { EnrollCourseServiceService } from './enroll-course-service.service';

describe('EnrollCourseServiceService', () => {
  let service: EnrollCourseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollCourseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
