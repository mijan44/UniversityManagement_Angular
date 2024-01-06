import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(public UserService:UserService) { }

  ngOnInit(): void { 
    console.log("user component loaded");
   
  }
  onSubmit(form:NgForm){
    console.log('test')
    this.UserService.saveUser().subscribe({
      next:res=>{
        console.log(res.toString());
       
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  

}
