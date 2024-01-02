import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UnallocateClassService {

  constructor(private http:HttpClient) { }


  deleteAllClassRoomURL = environment.apiBaseUrl+'/ClassRoom';

  

  deleteAllClass(){
    return this.http.delete(this.deleteAllClassRoomURL)
  }
  

}
