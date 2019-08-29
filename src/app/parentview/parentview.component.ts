import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildviewComponent } from '../childview/childview.component';

@Component({
  selector: 'app-parentview',
  templateUrl: './parentview.component.html',
  styleUrls: ['./parentview.component.css']
})
export class ParentviewComponent implements AfterViewInit {
  

  @ViewChild(ChildviewComponent, {static: false}) hello: ChildviewComponent;
  message:string;
  ngAfterViewInit() {
   this.message =this.hello.message1
  }

}
