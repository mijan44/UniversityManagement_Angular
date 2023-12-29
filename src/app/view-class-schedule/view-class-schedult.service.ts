import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../departments/Model/department';
import { environment } from 'src/environments/environment.development';
import { ViewClassSchedule } from './ClassScheduleViewModel';

@Injectable({
  providedIn: 'root'
})
export class ViewClassSchedultService {

  constructor(public http:HttpClient) { }
  deptList:Department [] = [];
  classScheduleViewList: ViewClassSchedule[] =[];
  deptURL:string=environment.apiBaseUrl+'/Departments'; /// environments base url 
  classSchedulrURL:string=environment.apiBaseUrl+'/ClassRoom/GetViewClassSchedule?DepartmentId='



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

  getClassSchedule(id:string){
    console.log(this.classSchedulrURL+id);
    this.http.get(this.classSchedulrURL+id)
  
    .subscribe({
  
      next: res=>{
      console.log(res);
      this.classScheduleViewList = res as ViewClassSchedule[];
    }
    
    ,error:err=>{
      console.log(err)
    }
  })   
  }



}
