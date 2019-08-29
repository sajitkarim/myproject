import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent2childComponent } from './parent2child.component';

describe('Parent2childComponent', () => {
  let component: Parent2childComponent;
  let fixture: ComponentFixture<Parent2childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent2childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent2childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
