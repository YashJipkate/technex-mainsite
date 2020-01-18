import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W11Component } from './w11.component';

describe('W11Component', () => {
  let component: W11Component;
  let fixture: ComponentFixture<W11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
