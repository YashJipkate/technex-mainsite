import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W14Component } from './w14.component';

describe('W14Component', () => {
  let component: W14Component;
  let fixture: ComponentFixture<W14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
