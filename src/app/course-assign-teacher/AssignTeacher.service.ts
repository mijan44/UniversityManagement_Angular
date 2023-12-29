import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Department } from 'src/app/departments/Model/department';
import { Course } from 'src/app/courses/Model/course';
import { CourseAssignTeacher } from './Model/CourseAssignTeacherModel';
import { Teacher } from 'src/app/teachers/teacher';
import { AssignedTeacherViewModel } from './Model/AssignedTeacherViewModel';



@Injectable({
  providedIn: 'root'
})
export class AssignTeacherService {

constructor(private http:HttpClient) { }

deptList : Department[] = [];
courseList : Course[] = [];
teacherlist : Teacher[] = [];
assignList : AssignedTeacherViewModel [] = [];



formData: CourseAssignTeacher = new CourseAssignTeacher();

deptURL:string=environment.apiBaseUrl+'/Departments'; /// environments base url 
courseURL:string=environment.apiBaseUrl+'/Course'; 
teacherURL:string=environment.apiBaseUrl+'/Teacher/GetTeacherByDepartment?DepartmentId='; /// environments base url 
URL:string=environment.apiBaseUrl+'/CourseAssignmentTeacher'; /// environments base url
getURL:string=environment.apiBaseUrl+'/CourseAssignmentTeacher/GetAssignedCourse'; /// environments base url

getalldepartments(){
  this.http.get(this.deptURL)

  .subscribe({

    next: res=>{
    console.log(res);
    this.deptList = res as Department[];
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


getallteachers(id:string){
  return this.http.get(this.teacherURL+id)
  
}


GetRemainingCredit(id:string){
 
 return this.http.get(environment.apiBaseUrl+'/CourseAssignmentTeacher/GetRemainingCredit?teacherId='+id);
  
}


saveCoursesAssign(){
  if(this.formData.id==""){
    this.formData.id="00000000-0000-0000-0000-000000000000";
  }
  return this.http.post(this.URL,this.formData)
 }


 getCourseAssignTeacher(){
   this.http.get(this.getURL)

  .subscribe({

    next: res=>{
    console.log(res);
    this.assignList = res as AssignedTeacherViewModel[];
  }
  
  ,error:err=>{
    console.log(err)
  }
})  
 }


 deleteAssignTeacher(id:string){
  return this.http.delete(this.URL+'/'+id)
  
 }





}
