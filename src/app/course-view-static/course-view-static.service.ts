import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Department } from '../departments/Model/department';
import { ViewCourseStatic } from './CourseStaticViewModel';

@Injectable({
  providedIn: 'root'
})
export class CourseViewStaticService {

  constructor(public http:HttpClient) { }

  deptList:Department [] = [];
  courseViewStatic: ViewCourseStatic[] =[];
  deptURL:string=environment.apiBaseUrl+'/Departments'; /// environments base url 
  courseViewStaticURL:string=environment.apiBaseUrl+'/ViewCourseStatic?DepartmentId='



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


  getCourseViewStatic(id:string){
    this.http.get(this.courseViewStaticURL+id)
  
    .subscribe({
  
      next: res=>{
      console.log(res);
      this.courseViewStatic = res as ViewCourseStatic[];
    }
    
    ,error:err=>{
      console.log(err)
    }
  })   
  }





}
