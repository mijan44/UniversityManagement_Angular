import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Course } from 'src/app/courses/Model/course'
import { Department } from 'src/app/departments/Model/department';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 
URL:string=environment.apiBaseUrl+'/Course'; 
deptURL:string=environment.apiBaseUrl+'/Departments';/// environments base url 

constructor(private http:HttpClient) { }

list :Course[] =  [];
deptlist :Department[] =  [];
semList = [1, 2, 3, 4, 5, 6, 7, 8];
formData:Course = new Course(); 

getallcourses(){
    this.http.get(this.URL)

    .subscribe({
      
      next: res=>{
      console.log(res);
      this.list = res as Course[];
    }
    
    ,error:err=>{
      console.log(err)
    }
  })   
}
getalldepartments(){
  this.http.get(this.deptURL)

  .subscribe({

    next: res=>{
    console.log(res);
    this.deptlist = res as Department[];
  }
  
  ,error:err=>{
    console.log(err)
  }
})   
}

saveCourses(){
  if(this.formData.id==""){
    this.formData.id="00000000-0000-0000-0000-000000000000";
  }
  return this.http.post(this.URL,this.formData)
 }
 
 deleteCourse(id:string){
  return this.http.delete(this.URL+'/'+id)
  
 }

}
