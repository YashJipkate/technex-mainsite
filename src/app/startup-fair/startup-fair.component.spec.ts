import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupFairComponent } from './startup-fair.component';

describe('StartupFairComponent', () => {
  let component: StartupFairComponent;
  let fixture: ComponentFixture<StartupFairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupFairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
