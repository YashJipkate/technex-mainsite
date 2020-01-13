import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W3Component } from './w3.component';

describe('W3Component', () => {
  let component: W3Component;
  let fixture: ComponentFixture<W3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
