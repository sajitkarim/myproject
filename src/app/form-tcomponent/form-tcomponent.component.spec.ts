import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTcomponentComponent } from './form-tcomponent.component';

describe('FormTcomponentComponent', () => {
  let component: FormTcomponentComponent;
  let fixture: ComponentFixture<FormTcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
