import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child2parent',
  templateUrl: './child2parent.component.html',
  styleUrls: ['./child2parent.component.css']
})
export class Child2parentComponent  {

  @Input() uname:string;
  @Output() sajit:EventEmitter<string>= new EventEmitter<string>();
  passdata(){
    this.sajit.emit('message is comming from child component.....')
  }

}
