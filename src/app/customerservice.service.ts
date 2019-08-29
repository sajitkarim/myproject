import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IemployeeData } from 'IemployeeData';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
// private url:string="../customerform/customerdetails/custdetails.json"
private url:string="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  getEmployees():Observable<IemployeeData[]>
  {
  return this.http.get<IemployeeData[]>(this.url)
  }
}

