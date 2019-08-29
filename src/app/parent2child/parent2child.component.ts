import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2child',
  templateUrl: './parent2child.component.html',
  styleUrls: ['./parent2child.component.css']
})
export class Parent2childComponent  {

 username:string=" fromparentcomponent"
 childdata:string;
 parentMethod(karim){
   this.childdata=karim
 }

}
