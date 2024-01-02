import { TestBed } from '@angular/core/testing';

import { UnallocateClassService } from './unallocate-class.service';

describe('UnallocateClassService', () => {
  let service: UnallocateClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnallocateClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
