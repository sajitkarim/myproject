import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEmpcompComponent } from './service-empcomp.component';

describe('ServiceEmpcompComponent', () => {
  let component: ServiceEmpcompComponent;
  let fixture: ComponentFixture<ServiceEmpcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEmpcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEmpcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
