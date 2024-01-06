import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { TeachersComponent } from './teachers/teachers.component';
import { CourseAssignTeacherComponent } from './course-assign-teacher/course-assign-teacher.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClasRoomAllocationComponent } from './AllocatteClassRoom/clas-room-allocation/clas-room-allocation.component';
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';
import { ResultComponent } from './result/result.component';
import { CourseViewStaticComponent } from './course-view-static/course-view-static.component';
import { ViewClassScheduleComponent } from './view-class-schedule/view-class-schedule.component';
import { UnassignAllCoursesComponent } from './unassign-all-courses/unassign-all-courses.component';
import { UnallocateAllClassRoomComponent } from './unallocate-all-class-room/unallocate-all-class-room.component';
import { UserComponent } from './user/user.component';
import { LogInComponent } from './user/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    CoursesComponent,
    TeachersComponent,
    CourseAssignTeacherComponent,
    StudentRegistrationComponent,
    ClasRoomAllocationComponent,
    EnrollCourseComponent,
    ResultComponent,
    CourseViewStaticComponent,
    ViewClassScheduleComponent,
    UnassignAllCoursesComponent,
    UnallocateAllClassRoomComponent,
    UserComponent,
    LogInComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
