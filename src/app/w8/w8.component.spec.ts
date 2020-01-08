import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W8Component } from './w8.component';

describe('W8Component', () => {
  let component: W8Component;
  let fixture: ComponentFixture<W8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
