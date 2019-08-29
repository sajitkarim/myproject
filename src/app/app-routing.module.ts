import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { Customerform2Component } from './customerform2/customerform2.component';


const routes: Routes = [
  // {path:'', component:CustomerformComponent, pathMatch:'full'},
  {path:'customerForm', component:CustomerformComponent},
  {path:'customerDetails',component:CustomerdetailsComponent},
  {path:'customerForm2',component:Customerform2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
