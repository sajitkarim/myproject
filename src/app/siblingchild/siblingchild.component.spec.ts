import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingchildComponent } from './siblingchild.component';

describe('SiblingchildComponent', () => {
  let component: SiblingchildComponent;
  let fixture: ComponentFixture<SiblingchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiblingchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
