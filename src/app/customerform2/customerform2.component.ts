import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerform2',
  templateUrl: './customerform2.component.html',
  styleUrls: ['./customerform2.component.css']
})
export class Customerform2Component implements OnInit {
  
chiru(x:any){
  console.log(x)
}
  constructor() { }

  ngOnInit() {
  }

}
