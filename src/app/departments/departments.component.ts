import { Component, OnInit} from '@angular/core';
import { DepartmentsServiceService } from './departments-service.service';
import { NgForm } from '@angular/forms';
import { Department } from './Model/department';



@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  constructor(public service:DepartmentsServiceService) { }
  
  ngOnInit(): void { 
    console.log("departments component loaded");
   
   result: this.service.getalldepartments();
  }
  onSubmit(form:NgForm){
    console.log('test')
    this.service.saveDepartment().subscribe({
      next:res=>{
        console.log(res.toString());
        result: this.service.getalldepartments();
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  updateDepartment(selectedDepartment:Department){
    this.service.formData=selectedDepartment;
  }

  deleteDepartment(id:string){
    this.service.deleteDepartment(id).subscribe({
      next:res=>{
        console.log(res);
        result: this.service.getalldepartments();
      },
      error:err=>{
        console.log(err);
      }
    })
  }


}
