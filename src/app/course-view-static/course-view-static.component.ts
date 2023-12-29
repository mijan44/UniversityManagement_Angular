import { Component, OnInit } from '@angular/core';
import { CourseViewStaticService } from './course-view-static.service';


@Component({
  selector: 'app-course-view-static',
  templateUrl: './course-view-static.component.html',
  styleUrls: ['./course-view-static.component.css']
})
export class CourseViewStaticComponent implements OnInit{

  constructor(public CourseViewStaticService :CourseViewStaticService){}

  ngOnInit(): void {
    
    console.log("CourseAssign component loaded");
  
    result: this.CourseViewStaticService.getalldepartments();

  }

  getCourseViewStatic(id:string){
    this.CourseViewStaticService.getCourseViewStatic(id);
  }
  

}
