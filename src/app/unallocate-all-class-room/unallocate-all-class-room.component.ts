import { Component, OnInit} from '@angular/core';
import { UnallocateClassService } from './unallocate-class.service';


@Component({
  selector: 'app-unallocate-all-class-room',
  templateUrl: './unallocate-all-class-room.component.html',
  styleUrls: ['./unallocate-all-class-room.component.css']
})
export class UnallocateAllClassRoomComponent implements OnInit {

  constructor(public UnallocateClassService: UnallocateClassService) { }

  
  ngOnInit(): void {

  }
  deleteAllClass(){
    this.UnallocateClassService.deleteAllClass().subscribe({

      next:res=>{
        console.log(res);
      },
      error:err=>{
        console.log(err);
      }
    })
  }

}
