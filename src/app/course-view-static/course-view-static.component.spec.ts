import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseViewStaticComponent } from './course-view-static.component';

describe('CourseViewStaticComponent', () => {
  let component: CourseViewStaticComponent;
  let fixture: ComponentFixture<CourseViewStaticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseViewStaticComponent]
    });
    fixture = TestBed.createComponent(CourseViewStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
