import { Component , OnInit} from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
  constructor(public LoginService:LoginService) { }

  ngOnInit(): void { 
    console.log("login component loaded");
   
  }
  onSubmit(form:NgForm){
    console.log('test')
    this.LoginService.saveLogin().subscribe({
      next:res=>{
        console.log(res.toString());
       
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  
}
