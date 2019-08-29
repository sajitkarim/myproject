import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PheaderComponent } from './pheader/pheader.component';
import { PfooterComponent } from './pfooter/pfooter.component';
import { ServiceEmpcompComponent } from './service-empcomp/service-empcomp.component';
import { FormTcomponentComponent } from './form-tcomponent/form-tcomponent.component';
import { Customerform2Component } from './customerform2/customerform2.component';
import { Parent2childComponent } from './parent2child/parent2child.component';
import { Child2parentComponent } from './child2parent/child2parent.component';
import { ParentviewComponent } from './parentview/parentview.component';
import { ChildviewComponent } from './childview/childview.component';
import { SiblingparentComponent } from './siblingparent/siblingparent.component';
import { SiblingchildComponent } from './siblingchild/siblingchild.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerdetailsComponent,
    CustomerformComponent,
    PheaderComponent,
    PfooterComponent,
    ServiceEmpcompComponent,
    FormTcomponentComponent,
    Customerform2Component,
    Parent2childComponent,
    Child2parentComponent,
    ParentviewComponent,
    ChildviewComponent,
    SiblingparentComponent,
    SiblingchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
