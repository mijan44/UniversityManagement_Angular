import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Department } from 'src/app/departments/Model/department';



@Injectable({
  providedIn: 'root'
})
export class DepartmentsServiceService {

URL:string=environment.apiBaseUrl+'/Departments'; /// environments base url 

  constructor(private http:HttpClient) { }


  list :Department[] =  [];

  formData:Department = new Department();

    
  getalldepartments(){
      this.http.get(this.URL)

      .subscribe({

        next: res=>{
        console.log(res);
        this.list = res as Department[];
      }
      
      ,error:err=>{
        console.log(err)
      }
    })   
  }

  saveDepartment(){
   return this.http.post(this.URL,this.formData)

   
  }


  deleteDepartment(id:string){
    return this.http.delete(this.URL+"/"+id);
  }

  uypdateDepartment(){
    return this.http.put(this.URL+"/"+this.formData.id,this.formData)
  }


}