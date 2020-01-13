import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W16Component } from './w16.component';

describe('W16Component', () => {
  let component: W16Component;
  let fixture: ComponentFixture<W16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
