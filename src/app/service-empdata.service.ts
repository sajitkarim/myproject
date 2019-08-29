import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serviceEmpInterface } from 'serviceInterface';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpdataService {
  // private url:string="../getsure/myproject/src/assets/serviceEmp.json"
  private url:string="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  getEmployees():Observable <serviceEmpInterface[]>
  {
    return this.http.get<serviceEmpInterface[]>(this.url)
  }
} 
