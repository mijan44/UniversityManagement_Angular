import { Component, OnInit } from '@angular/core';
import { ClassRoomAllocationServiceService } from '../class-room-allocation-service.service';
import { ClassRoom } from '../ClassRoom';
import { Course } from 'src/app/courses/Model/course';

import { NgForm } from '@angular/forms';
import { ClassRoomViewModel } from '../ClassRoomViewModel';


@Component({
  selector: 'app-clas-room-allocation',
  templateUrl: './clas-room-allocation.component.html',
  styleUrls: ['./clas-room-allocation.component.css']
})
export class ClasRoomAllocationComponent implements OnInit {
  constructor(public ClassRoomAllocationServiceService: ClassRoomAllocationServiceService){};

  ngOnInit(): void { 
    console.log("ClassRoom component loaded");
    //this.StudentRegistrationService.getallstudents();
    this.ClassRoomAllocationServiceService.getalldepartments();
    this.ClassRoomAllocationServiceService.getallclassroom();
  
  }

  onSubmit(form:NgForm){
    console.log(form)
    this.ClassRoomAllocationServiceService.saveClassRoom().subscribe({
      next:res=>{
        console.log(res);
        this.ClassRoomAllocationServiceService.getallclassroom();
        //result: this.AssignTeacherService.getallcourses();
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  

  
  getCourse(value:string){
    this.ClassRoomAllocationServiceService.getallcourses(value)
    
  .subscribe({

    next: res=>{
    //console.log(res);
    this.ClassRoomAllocationServiceService.courseList = res as Course[];
  }
  
  ,error:err=>{
    console.log(err)
  }
}) ;
  }



  updateClassRoom(selectedClassRoom:ClassRoomViewModel){
    this.ClassRoomAllocationServiceService.formData=selectedClassRoom;
    this.getCourse(selectedClassRoom.departmentId);
  }

  deleteClassRoom(id:string){
    this.ClassRoomAllocationServiceService.deleteClassRoom(id).subscribe({
      next:res=>{
        console.log(res);
        this.ClassRoomAllocationServiceService.getallclassroom();
      },
      error:err=>{
        console.log(err);
      }
    })
  }




}
