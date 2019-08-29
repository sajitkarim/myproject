import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentviewComponent } from './parentview.component';

describe('ParentviewComponent', () => {
  let component: ParentviewComponent;
  let fixture: ComponentFixture<ParentviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
