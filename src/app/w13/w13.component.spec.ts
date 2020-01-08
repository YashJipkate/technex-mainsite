import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W13Component } from './w13.component';

describe('W13Component', () => {
  let component: W13Component;
  let fixture: ComponentFixture<W13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
