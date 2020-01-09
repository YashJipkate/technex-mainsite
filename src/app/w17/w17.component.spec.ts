import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W17Component } from './w17.component';

describe('W17Component', () => {
  let component: W17Component;
  let fixture: ComponentFixture<W17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
