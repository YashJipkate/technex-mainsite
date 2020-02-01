import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W91Component } from './w91.component';

describe('W91Component', () => {
  let component: W91Component;
  let fixture: ComponentFixture<W91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
