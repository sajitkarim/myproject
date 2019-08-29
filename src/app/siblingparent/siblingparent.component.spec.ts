import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingparentComponent } from './siblingparent.component';

describe('SiblingparentComponent', () => {
  let component: SiblingparentComponent;
  let fixture: ComponentFixture<SiblingparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiblingparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
