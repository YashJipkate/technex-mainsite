import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W6Component } from './w6.component';

describe('W6Component', () => {
  let component: W6Component;
  let fixture: ComponentFixture<W6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
