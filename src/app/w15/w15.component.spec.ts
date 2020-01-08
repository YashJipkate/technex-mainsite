import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W15Component } from './w15.component';

describe('W15Component', () => {
  let component: W15Component;
  let fixture: ComponentFixture<W15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
