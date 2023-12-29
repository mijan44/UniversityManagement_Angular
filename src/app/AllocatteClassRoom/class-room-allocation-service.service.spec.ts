import { TestBed } from '@angular/core/testing';

import { ClassRoomAllocationServiceService } from './class-room-allocation-service.service';

describe('ClassRoomAllocationServiceService', () => {
  let service: ClassRoomAllocationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassRoomAllocationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
