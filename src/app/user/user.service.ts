import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from './UserModel';





@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient ) { }

  userURL:string=environment.apiBaseUrl+'/User';
  formData : User = new User();

  saveUser(){
    if(this.formData.id==""){
      this.formData.id="00000000-0000-0000-0000-000000000000";
    }
    return this.http.post(this.userURL,this.formData)
  }
}
