import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Teacher } from 'src/app/teachers/teacher';
import { Department } from 'src/app/departments/Model/department';
import {TeacherViewModel} from 'src/app/teachers/teacherViewModel';



@Injectable({
  providedIn: 'root'
})
export class TechersService {

  URL:string=environment.apiBaseUrl+'/Teacher'; /// environments base url 
  deptURL:string=environment.apiBaseUrl+'/Departments';/// environments base url 

  constructor(private http:HttpClient) { }

  
  teacherlist : TeacherViewModel[] =  [];
  deptlist :Department[] =  [];

  formData:Teacher = new Teacher();
    
  getallteachers(){
      this.http.get(this.URL)

      .subscribe({

        next: res=>{
        console.log(res);
        this.teacherlist = res as TeacherViewModel[];
      }
      
      ,error:err=>{
        console.log(err)
      }
    })   
  }

  saveTeacher(){
    if(this.formData.id==""){
      this.formData.id="00000000-0000-0000-0000-000000000000";
    }
   return this.http.post(this.URL,this.formData)
   
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
 
  

  deleteTeacher(id:string){
    return this.http.delete(this.URL+'/'+id)
  }
  

  
}

