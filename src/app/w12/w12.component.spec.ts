import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W12Component } from './w12.component';

describe('W12Component', () => {
  let component: W12Component;
  let fixture: ComponentFixture<W12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
