import { Component, OnInit } from '@angular/core';

import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
public employees=[];
public errMsg:any;
  constructor(private customerserviceService:CustomerserviceService) { }

  ngOnInit() {
    this.customerserviceService.getEmployees()
    .subscribe(result=>this.employees=result,
               error=>this.errMsg=error);
  }

}

