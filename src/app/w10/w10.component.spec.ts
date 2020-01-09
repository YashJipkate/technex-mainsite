import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W10Component } from './w10.component';

describe('W10Component', () => {
  let component: W10Component;
  let fixture: ComponentFixture<W10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
