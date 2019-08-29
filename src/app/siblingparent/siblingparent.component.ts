import { Component, OnInit } from '@angular/core';
import { SiblingserviceService } from '../siblingservice.service';

@Component({
  selector: 'app-siblingparent',
  templateUrl: './siblingparent.component.html',
  styleUrls: ['./siblingparent.component.css']
})
export class SiblingparentComponent implements OnInit {
  result:string;
 
  constructor(private data:SiblingserviceService) { }
  ngOnInit() {
    this.data. currenrMessage.subscribe(message=>this.result=message)
    
  } 
  newMessage(){
    this.data.changeMessage('sibling component change the message -hello')
  }

}
