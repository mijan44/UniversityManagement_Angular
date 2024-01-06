import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Login } from './loginModel';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient ) { }

  loginURL:string=environment.apiBaseUrl+'/User/UserLogin';
  formData : Login = new Login();

  saveLogin(){
    
    return this.http.post(this.loginURL+"?UserEmail="+this.formData.userEmail+"&UserPassword="+this.formData.userPassword,null)
  }

}
