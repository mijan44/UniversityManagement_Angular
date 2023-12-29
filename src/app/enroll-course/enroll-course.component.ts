import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EnrollCourseServiceService } from './enroll-course-service.service';
import { NgForm } from '@angular/forms';
import { EnrollCourse } from './EnrollCourse';
import { EnrollCourseViewModel } from './enrollCourseViewModel';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css']
})
export class EnrollCourseComponent implements OnInit  {

  constructor(public EnrollCourseService: EnrollCourseServiceService){};
  ngOnInit(): void { 
    console.log("EnrollCourse component loaded");
    this.EnrollCourseService.getallstudents();
    this.EnrollCourseService.getallcourses();
    this.EnrollCourseService.getallEnrollmentList();
  
  }

    getallstudents(){
      this.EnrollCourseService.getallstudents();
    }


    getallcourses(){
      this.EnrollCourseService.getallcourses();
    }


    onSubmit(form:NgForm){
      console.log(form)
      this.EnrollCourseService.saveEnrollCourse().subscribe({
        next:res=>{
          console.log(res);
          this.EnrollCourseService.getenrollcourse();
          this.EnrollCourseService.getallEnrollmentList();
        },
        error:err=>{
          console.log(err);
        }
      })
    }

    getStudentDetails(value:string){
     this.EnrollCourseService.studentDetails = this.EnrollCourseService.studentList.filter(x=>x.id==value).values().next().value;
    }


    updateCourseEnroll(selectedEnrollCourse : EnrollCourseViewModel){
      this.EnrollCourseService.formData.id=selectedEnrollCourse.id;
      this.EnrollCourseService.formData.courseId=selectedEnrollCourse.courseId;
      this.EnrollCourseService.formData.studentId=selectedEnrollCourse.studentId;
      console.log(new Date("12/23/2023"));
      this.EnrollCourseService.formData.enrollmentDate=new Date("12/23/2023");
      this.getStudentDetails(selectedEnrollCourse.studentId);
    }

    deleteCourseEnroll(id : string ){
      this.EnrollCourseService.deleteCourseEnroll(id).subscribe({
        next:res=>{
          console.log(res);
          result: this.EnrollCourseService.getallEnrollmentList();
        },
        error:err=>{
          console.log(err);
        }
      })
    }



}
