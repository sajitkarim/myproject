import { Component, OnInit } from '@angular/core';
import { ServiceEmpdataService } from '../service-empdata.service';

@Component({
  selector: 'app-service-empcomp',
  templateUrl: './service-empcomp.component.html',
  styleUrls: ['./service-empcomp.component.css']
})
export class ServiceEmpcompComponent implements OnInit {
  public employees=[];
  public errMsg:any;

  constructor(private serviceEmpdataService:ServiceEmpdataService) { }

  ngOnInit() {
    this.serviceEmpdataService.getEmployees()
    .subscribe(result=>this.employees=result,
                error=>this.errMsg=error );
  }

}
