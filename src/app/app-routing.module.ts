import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CourseAssignTeacherComponent } from './course-assign-teacher/course-assign-teacher.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { ClasRoomAllocationComponent } from './AllocatteClassRoom/clas-room-allocation/clas-room-allocation.component';
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';
import { ResultComponent } from './result/result.component';
import { CourseViewStaticComponent } from './course-view-static/course-view-static.component';
import { ViewClassScheduleComponent } from './view-class-schedule/view-class-schedule.component';
import { UnallocateAllClassRoomComponent } from './unallocate-all-class-room/unallocate-all-class-room.component';
import { UnassignAllCoursesComponent } from './unassign-all-courses/unassign-all-courses.component';
import { UserComponent } from './user/user.component';
import { LogInComponent } from './user/log-in/log-in.component';


const routes: Routes = [
  { path: 'departments', component: DepartmentsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'teachers', component: TeachersComponent },
  { path:'CourseAssign',component:CourseAssignTeacherComponent},
  { path : 'RegisterStudent', component : StudentRegistrationComponent},
  { path: 'ClassRoom', component: ClasRoomAllocationComponent },
  { path:'EnrollCourse',component:EnrollCourseComponent},
  { path: 'Result', component: ResultComponent },
  { path: 'ViewCourseStatic', component: CourseViewStaticComponent  },
  { path: 'ViewClassSchedule', component: ViewClassScheduleComponent },
  { path: 'UnallocateClassRoom', component: UnallocateAllClassRoomComponent},
  { path: 'UnassignCourse',component: UnassignAllCoursesComponent},
  { path: 'UserRegistration', component: UserComponent },
  {path:'UserLogin',component:LogInComponent},

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
