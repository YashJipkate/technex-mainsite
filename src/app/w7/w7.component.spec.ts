import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W7Component } from './w7.component';

describe('W7Component', () => {
  let component: W7Component;
  let fixture: ComponentFixture<W7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
