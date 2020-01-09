import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W2Component } from './w2.component';

describe('W2Component', () => {
  let component: W2Component;
  let fixture: ComponentFixture<W2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
