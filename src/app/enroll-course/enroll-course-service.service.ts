import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../courses/Model/course';
import { StudentsRegistration } from '../student-registration/studentsRegistrationModel';
import { EnrollCourse } from './EnrollCourse';
import { Department } from '../departments/Model/department';
import { environment } from 'src/environments/environment.development';
import { EnrollCourseViewModel } from './enrollCourseViewModel';


@Injectable({
  providedIn: 'root'
})
export class EnrollCourseServiceService {

  constructor(private http: HttpClient) { }

  enrollList : EnrollCourse[] = [];
  courseList : Course[] = []; 
  studentList : StudentsRegistration[] = [];
  studentDetails : StudentsRegistration = new StudentsRegistration();
  StudentCourseenrollmentList:EnrollCourseViewModel[]=[];
  list :Department[] =  [];
  formData:EnrollCourse = new EnrollCourse();
  enrollmentListURL:string=environment.apiBaseUrl+'/CourseEnrollment/GetAllCourseEnroll'
  studentURL:string=environment.apiBaseUrl+'/StudentRegistration'; /// environments base url
  enrollURL:string=environment.apiBaseUrl+'/CourseEnrollment'; /// environments base url
  courseURL:string=environment.apiBaseUrl+'/Course'; /// environments base url



  getallstudents(){
    this.http.get(this.studentURL)
    .subscribe({
      next: res=>{
      console.log(res);
      this.studentList = res as StudentsRegistration[];
    }
    
    ,error:err=>{
      console.log(err)
    }
  })   
  }



  getallcourses(){
    this.http.get(this.courseURL)
    .subscribe({
      next: res=>{
      console.log(res);
      this.courseList = res as Course[];
    }
    
    ,error:err=>{
      console.log(err)
    }
  })   
  }

  getallEnrollmentList(){
    this.http.get(this.enrollmentListURL)
    .subscribe({
      next: res=>{
      console.log(res);
      this.StudentCourseenrollmentList = res as EnrollCourseViewModel[];
    }
    
    ,error:err=>{
      console.log(err)
    }
  })   
  }

  getenrollcourse(){
    this.http.get(this.enrollURL)
    .subscribe({
      next: res=>{
      console.log(res);
      this.enrollList = res as EnrollCourse[];
    }
    
    ,error:err=>{
      console.log(err)
    }
  })   
  }

  saveEnrollCourse(){
    if(this.formData.id==""){
      this.formData.id="00000000-0000-0000-0000-000000000000";
    }
    console.log(this.formData);
    return this.http.post(this.enrollURL,this.formData);
  }


  deleteCourseEnroll(id:string){
    return this.http.delete(this.enrollURL+"/"+id);
  }




}
