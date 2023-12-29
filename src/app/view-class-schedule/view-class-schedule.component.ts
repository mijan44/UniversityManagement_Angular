import { Component, OnInit } from '@angular/core';
import{ViewClassSchedultService} from './view-class-schedult.service';


@Component({
  selector: 'app-view-class-schedule',
  templateUrl: './view-class-schedule.component.html',
  styleUrls: ['./view-class-schedule.component.css']
})
export class ViewClassScheduleComponent implements OnInit{

  constructor(public ViewClassSchedultService:ViewClassSchedultService){}


  
  ngOnInit(): void {
    
    console.log("CourseAssign component loaded");
  
    result: this.ViewClassSchedultService.getalldepartments();

  }

  getClassSchedule(id:string){
    this.ViewClassSchedultService.getClassSchedule(id);
  }

}
