import { Component, OnInit } from '@angular/core';
import {StudentRegistrationServiceService} from './student-registration-service.service'
import { NgForm } from '@angular/forms';
import { NgbDatepickerModule, } from '@ng-bootstrap/ng-bootstrap';
import { StudentsRegistration } from './studentsRegistrationModel';


@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',

  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit { 

   constructor(public StudentRegistrationService: StudentRegistrationServiceService){};

  ngOnInit(): void { 
    console.log("Resister students component loaded");
    this.StudentRegistrationService.getallstudents();
    this.StudentRegistrationService.getalldepartments();
  
  }


  onSubmit(form:NgForm){
    console.log('test')
    this.StudentRegistrationService.saveStudent().subscribe({
      next:res=>{
        console.log(res);
        result: this.StudentRegistrationService.getallstudents();
      },
      error:err=>{
        console.log(err);
      }
    })
  }


  updateRegStudent(selectedStudent:StudentsRegistration){
    this.StudentRegistrationService.formData=selectedStudent;
  }
  deleteRegStudent(id:string){
    this.StudentRegistrationService.deleteRegStudent(id).subscribe({
      next:res=>{
        console.log(res);
        result: this.StudentRegistrationService.getallstudents();
      },
      error:err=>{
        console.log(err);
      }
    })
  }




}
