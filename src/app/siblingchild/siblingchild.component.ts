import { Component, OnInit } from '@angular/core';
import { SiblingserviceService } from '../siblingservice.service';

@Component({
  selector: 'app-siblingchild',
  templateUrl: './siblingchild.component.html',
  styleUrls: ['./siblingchild.component.css']
})
export class SiblingchildComponent implements OnInit {

  constructor(private data:SiblingserviceService) { }
  message:string;
  ngOnInit() {
    this.data.currenrMessage.subscribe(message=>this.message=message)
  }
  // newMessage(){
  //   this.data.changeMessage('sibling component change the message -hello')
  // }

}
