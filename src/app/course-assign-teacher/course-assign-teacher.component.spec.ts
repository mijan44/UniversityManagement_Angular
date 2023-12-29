import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssignTeacherComponent } from './course-assign-teacher.component';

describe('CourseAssignTeacherComponent', () => {
  let component: CourseAssignTeacherComponent;
  let fixture: ComponentFixture<CourseAssignTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseAssignTeacherComponent]
    });
    fixture = TestBed.createComponent(CourseAssignTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
