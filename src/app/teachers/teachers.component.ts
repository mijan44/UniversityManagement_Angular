import { Component, OnInit } from '@angular/core';
import { TechersService } from './techers.service';
import { NgForm } from '@angular/forms';
import { Teacher } from './teacher';




@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  
  constructor(public TeachersService: TechersService) { }

  ngOnInit(): void {
    console.log("teachers component loaded");
    result:this.TeachersService.getallteachers();
    result: this.TeachersService.getalldepartments();

  }

  updateTeacher(teacher:Teacher){
    this.TeachersService.formData = Object.assign({},teacher);
  }

  deleteTeacher(id:string){
    this.TeachersService.deleteTeacher(id).subscribe({
      next:res=>{
        console.log(res);
        result: this.TeachersService.getallteachers();
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  onSubmit(form:NgForm){
    console.log('test')
    this.TeachersService.saveTeacher().subscribe({
      next:res=>{
        console.log(res);
        result: this.TeachersService.getallteachers();
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  

}
