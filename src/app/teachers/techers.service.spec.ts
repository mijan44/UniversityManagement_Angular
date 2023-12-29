import { TestBed } from '@angular/core/testing';

import { TechersService } from './techers.service';

describe('TechersService', () => {
  let service: TechersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
