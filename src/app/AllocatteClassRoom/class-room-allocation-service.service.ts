import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassRoom } from './ClassRoom';
import { environment } from 'src/environments/environment.development';
import { Department } from '../departments/Model/department';
import { Course } from '../courses/Model/course';
import { ClassRoomViewModel } from './ClassRoomViewModel';



@Injectable({
  providedIn: 'root'
})
export class ClassRoomAllocationServiceService {

  constructor(private http: HttpClient) { }

  formData : ClassRoomViewModel = new ClassRoomViewModel();
  deptURL:string=environment.apiBaseUrl+'/Departments'; /// environments base url 
  courseURL:string=environment.apiBaseUrl+'/ClassRoom/GetCourseByDepartmentId';
  classRoomURL:string=environment.apiBaseUrl+'/ClassRoom';
  deptList : Department[] = [];
  courseList : Course[] = [];  
  classRoomList : ClassRoomViewModel[] = []; 



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


  
getallcourses(id:string){

  console.log(this.courseURL+id);
  return this.http.get(this.courseURL+"?DepartmentId="+id)
  
}



saveClassRoom(){
  if(this.formData.id==""){
    this.formData.id="00000000-0000-0000-0000-000000000000";
  }
  //this.formData.from = new Date(this.formData.from);
  //this.formData.to = new Date(this.formData.to);
  console.log(this.formData);
  return this.http.post(this.classRoomURL,this.formData)
 }

getallclassroom(){
  this.http.get(environment.apiBaseUrl+'/ClassRoom')
  
  .subscribe({
  
    next: res=>{
    console.log(res);
    this.classRoomList = res as ClassRoomViewModel[];
  }
  
  ,error:err=>{
    console.log(err)
  }
})   

}

deleteClassRoom(id:string){
  return this.http.delete(environment.apiBaseUrl+'/ClassRoom/'+id)
}



}
