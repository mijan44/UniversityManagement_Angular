import { TestBed } from '@angular/core/testing';

import { ViewClassSchedultService } from './view-class-schedult.service';

describe('ViewClassSchedultService', () => {
  let service: ViewClassSchedultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewClassSchedultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
