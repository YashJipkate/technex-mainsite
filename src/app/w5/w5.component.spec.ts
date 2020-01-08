import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W5Component } from './w5.component';

describe('W5Component', () => {
  let component: W5Component;
  let fixture: ComponentFixture<W5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
