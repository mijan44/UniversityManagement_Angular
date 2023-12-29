import { Injectable } from '@angular/core';
import { StudentsRegistration } from './studentsRegistrationModel';
import { Department } from 'src/app/departments/Model/department';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { StudentsRegistrationViewModel } from './StudentRegistrationViewModel';
 
@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationServiceService {


  constructor(private http:HttpClient) { }
  deptList : Department[] = [];
  studentList : StudentsRegistrationViewModel[] = [];

formData : StudentsRegistration = new StudentsRegistration();
deptURL:string=environment.apiBaseUrl+'/Departments'; /// environments base url 
studentURL:string=environment.apiBaseUrl+'/StudentRegistration'; /// environments base url



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


saveStudent(){
  if(this.formData.id==""){
    this.formData.id="00000000-0000-0000-0000-000000000000";
  }
 return this.http.post(this.studentURL,this.formData)
}



getallstudents(){
  this.http.get(this.studentURL)

  .subscribe({

    next: res=>{
    console.log(res);
    this.studentList = res as StudentsRegistrationViewModel[];
  }
  
  ,error:err=>{
    console.log(err)
  }
})
}

deleteRegStudent(id:string){
  return this.http.delete(this.studentURL+"/"+id);
}



}
