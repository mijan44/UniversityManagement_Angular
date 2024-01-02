import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnallocateAllClassRoomComponent } from './unallocate-all-class-room.component';

describe('UnallocateAllClassRoomComponent', () => {
  let component: UnallocateAllClassRoomComponent;
  let fixture: ComponentFixture<UnallocateAllClassRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnallocateAllClassRoomComponent]
    });
    fixture = TestBed.createComponent(UnallocateAllClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
