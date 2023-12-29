import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasRoomAllocationComponent } from './clas-room-allocation.component';

describe('ClasRoomAllocationComponent', () => {
  let component: ClasRoomAllocationComponent;
  let fixture: ComponentFixture<ClasRoomAllocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasRoomAllocationComponent]
    });
    fixture = TestBed.createComponent(ClasRoomAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
