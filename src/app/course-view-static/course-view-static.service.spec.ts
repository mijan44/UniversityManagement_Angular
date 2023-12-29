import { TestBed } from '@angular/core/testing';

import { CourseViewStaticService } from './course-view-static.service';

describe('CourseViewStaticService', () => {
  let service: CourseViewStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseViewStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
