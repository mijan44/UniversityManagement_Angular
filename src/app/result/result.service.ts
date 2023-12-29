import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Course } from '../courses/Model/course';
import { StudentsRegistration } from '../student-registration/studentsRegistrationModel';
import { Result } from './result';
import { ResultViewModel } from './resultViewModel';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  formData:Result = new Result();
  studentDetails : StudentsRegistration = new StudentsRegistration();
  courseList : Course[] = []; 
  studentList : StudentsRegistration[] = [];
  resultList : ResultViewModel[] = [];
  studentURL:string=environment.apiBaseUrl+'/StudentRegistration'; /// environments base url
 
  courseURL:string=environment.apiBaseUrl+'/Course'; /// environments base url
  resultURL:string=environment.apiBaseUrl+'/StudentsResult'; /// environments base url


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



  getallresults(){
    this.http.get(this.resultURL+'/GetAllResults')
    .subscribe({
      next: res=>{
      console.log(res);
      this.resultList = res as ResultViewModel[];
    }
    
    ,error:err=>{
      console.log(err)
    }
  })   
  }


  updateResult(selectResult:ResultViewModel){
    return this.http.put(this.resultURL+'/',this.resultList);
  }

  deleteResult(id:string){
    return this.http.delete(this.resultURL+"/"+id);
  }


  saveResult(){
    if(this.formData.id==""){
      this.formData.id="00000000-0000-0000-0000-000000000000";
    }
    console.log(this.formData);
    return this.http.post(environment.apiBaseUrl+'/StudentsResult',this.formData);
  }

}
