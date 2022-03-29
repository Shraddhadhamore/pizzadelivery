import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADMIN_URL } from '../config/Url';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
  public adminLogin(data:any){
    return this.http.post(`${ADMIN_URL}adminlogin`,data);
  }
}
