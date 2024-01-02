import { TestBed } from '@angular/core/testing';

import { UnallocateCourseService } from './unallocate-course.service';

describe('UnallocateCourseService', () => {
  let service: UnallocateCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnallocateCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
