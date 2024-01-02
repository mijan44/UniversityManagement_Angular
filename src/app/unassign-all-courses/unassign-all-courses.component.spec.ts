import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignAllCoursesComponent } from './unassign-all-courses.component';

describe('UnassignAllCoursesComponent', () => {
  let component: UnassignAllCoursesComponent;
  let fixture: ComponentFixture<UnassignAllCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnassignAllCoursesComponent]
    });
    fixture = TestBed.createComponent(UnassignAllCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
