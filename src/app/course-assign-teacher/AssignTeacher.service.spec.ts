/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AssignTeacherService } from './AssignTeacher.service';

describe('Service: AssignTeacher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignTeacherService]
    });
  });

  it('should ...', inject([AssignTeacherService], (service: AssignTeacherService) => {
    expect(service).toBeTruthy();
  }));
});
