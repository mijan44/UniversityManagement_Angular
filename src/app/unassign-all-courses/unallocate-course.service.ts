import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UnallocateCourseService {

  constructor(private http:HttpClient) { }

  deleteAllCourseURL = environment.apiBaseUrl+'/Course';

  deleteAllCourse(){
    console.log("deleteAllCourse() called");
    return this.http.delete(this.deleteAllCourseURL)
  }
  

}
