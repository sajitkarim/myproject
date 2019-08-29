import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingserviceService {

  private messageSource=new BehaviorSubject('defaultmessage');
  currenrMessage=this.messageSource
  changeMessage(message:string){
    this.messageSource.next(message)
  }
}
