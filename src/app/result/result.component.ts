import { Component, OnInit } from '@angular/core';
import { ResultService } from './result.service';
import { Result } from './result';
import { NgForm } from '@angular/forms';
import { ResultViewModel } from './resultViewModel';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
 constructor(public ResultService:ResultService ) { }

 ngOnInit(): void {
  this.ResultService.getallstudents();
  this.ResultService.getallcourses();
  this.ResultService.getallresults();
   
 }


onSubmit(form:NgForm){
  this.ResultService.saveResult().subscribe({
    next:res=>{
      console.log(res);
      this.ResultService.getallresults();
    },
    error:err=>{
      console.log(err);
    }
  })
}



getStudentDetails(value:string){
  this.ResultService.studentDetails = this.ResultService.studentList.filter(x=>x.id==value).values().next().value;
 }
 


 updateResult(selectedResult:ResultViewModel){
  this.ResultService.formData=selectedResult;
 }


deleteResult(id:string){
  this.ResultService.deleteResult(id).subscribe({
    next:res=>{
      console.log(res);
    },
    error:err=>{
      console.log(err);
    }
  })
}

saveResult(){
  this.ResultService.saveResult().subscribe({
    next:res=>{
      console.log(res);
    },
    error:err=>{
      console.log(err);
    }
  })

}








 


}
