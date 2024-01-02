import { Component } from '@angular/core';
import { UnallocateCourseService } from './unallocate-course.service';

@Component({
  selector: 'app-unassign-all-courses',
  templateUrl: './unassign-all-courses.component.html',
  styleUrls: ['./unassign-all-courses.component.css']
})
export class UnassignAllCoursesComponent {

  constructor(public UnallocateCourseService: UnallocateCourseService) { }

  ngOnInit(): void {

  }
  deleteAllCourse(){
    this.UnallocateCourseService.deleteAllCourse().subscribe({

      next:res=>{
        console.log(res);
      },
      error:err=>{
        console.log(err);
      }
    })
  }

}
