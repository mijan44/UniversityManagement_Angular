import { Component , OnInit } from '@angular/core';
import { AssignTeacherService } from './AssignTeacher.service';
import { NgForm } from '@angular/forms';
import { Course } from '../courses/Model/course';
import { CourseAssignTeacher } from './Model/CourseAssignTeacherModel';
import { Teacher } from '../teachers/teacher';








@Component({
  selector: 'app-course-assign-teacher',
  templateUrl: './course-assign-teacher.component.html',
  styleUrls: ['./course-assign-teacher.component.css']
})
export class CourseAssignTeacherComponent implements OnInit{
  
    constructor(public AssignTeacherService: AssignTeacherService) { }

    courseInformation : Course = new Course();
    courseToBeTaken: number = 0;
    remainingCredit: number = 0;
    teclst : Teacher[] = [];

    
  
    ngOnInit(): void {
    
    console.log("CourseAssign component loaded");
    result:this.AssignTeacherService.getallcourses();
    result: this.AssignTeacherService.getalldepartments();
    this.AssignTeacherService.getCourseAssignTeacher();
  


  }

  //need to do save function for saving sata into database
  onSubmit(form:NgForm){
    console.log(form)
    this.AssignTeacherService.saveCoursesAssign().subscribe({
      next:res=>{
        console.log(res);
        this.AssignTeacherService.getCourseAssignTeacher();
        //result: this.AssignTeacherService.getallcourses();
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  



  getTeacher(value:string){
    this.AssignTeacherService.getallteachers(value)
    
  .subscribe({

    next: res=>{
    //console.log(res);
    this.AssignTeacherService.teacherlist = res as Teacher[];
  }
  
  ,error:err=>{
    console.log(err)
  }
}) ;
  }

  getCourseDetails(value:string){
   
    this.courseInformation = this.AssignTeacherService.courseList.filter(x=>x.id == value)[0]; // front end query form table 
    this.remainingCredit =  this.remainingCredit- this.courseInformation.courseCredit;
    
  }

  getTeacherDetails(value:string){
    console.log('teacherId = '+value);
    //console.log(this.AssignTeacherService.teacherlist);
    this.courseToBeTaken = this.AssignTeacherService.teacherlist.filter(x=>x.id == value)[0].creditToBeTaken; // front end query form table
    this.AssignTeacherService.GetRemainingCredit(value)
    .subscribe({

      next: res=>{
      console.log(res);
      this.remainingCredit = res as number;
    }
    
    ,error:err=>{
      console.log(err)
    }
  }) 
  }


  updateAssignTeacher(selectedAssignTeacher:CourseAssignTeacher){
    this.AssignTeacherService.formData=selectedAssignTeacher;
    this.AssignTeacherService.getallteachers(selectedAssignTeacher.departmentId) .subscribe({

      next: res=>{
      console.log(res);
      this.AssignTeacherService.teacherlist = res as Teacher[];
      this.courseToBeTaken = this.AssignTeacherService.teacherlist.filter(x=>x.id == selectedAssignTeacher.teacherId)[0].creditToBeTaken;
    }
    
    ,error:err=>{
      console.log(err)
    }
  }) ;

  this.AssignTeacherService.GetRemainingCredit(selectedAssignTeacher.teacherId)
  .subscribe({

    next: res=>{
    console.log(res);
    this.remainingCredit = res as number;
  }
  
  ,error:err=>{
    console.log(err)
  }
}) 

this.getCourseDetails(selectedAssignTeacher.courseId);
 //console.log(this.teclst);

   
  }

  deleteAssignTeacher(id:string){
    this.AssignTeacherService.deleteAssignTeacher(id).subscribe({
      next:res=>{
        console.log(res);
        result: this.AssignTeacherService.getCourseAssignTeacher();
      },
      error:err=>{
        console.log(err);
      }
    })
  }








  


}
