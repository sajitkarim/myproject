

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  

  userForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    contact: new FormControl("", [Validators.pattern('[0-9 +]{13}')]),
    email: new FormControl("",[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}")]),
    
    address:new FormGroup({
      city:new FormControl("ongole",[Validators.required, Validators.pattern('[a-z]+')]),
      street:new FormControl("",[Validators.pattern('[a-z]{10}')]),
      postalcode:new FormControl("123456",[Validators.required, Validators.pattern('[0-9]{6}')]), 

    })
  });

  onsubmit(){
    console.log(this.userForm.value)
  }

}
