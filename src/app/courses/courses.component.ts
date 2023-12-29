import { Component , OnInit} from '@angular/core';
import { CoursesService } from './courses.service';
import { NgForm } from '@angular/forms';
import { Course } from './Model/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {constructor(public service:CoursesService) { }
ngOnInit(): void { 
  console.log("courses component loaded");
 
 result: this.service.getallcourses();
  result: this.service.getalldepartments();
 
 

}

 
 


onSubmit(form:NgForm){
  console.log('test')
  this.service.saveCourses().subscribe({
    next:res=>{
      console.log( res.toString());
      result: this.service.getallcourses();
    },
    error:err=>{
      console.log(err.error.Message);
    }
  })
}


updateCourse(selectedCourse:Course){
  this.service.formData=selectedCourse;
}
deleteCourse(id:string){
  this.service.deleteCourse(id).subscribe({
    next:res=>{
      console.log(res);
      result: this.service.getallcourses();
    },
    error:err=>{
      console.log(err);
    }
  })
}



semesters: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

}