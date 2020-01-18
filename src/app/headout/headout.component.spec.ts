import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadoutComponent } from './headout.component';

describe('HeadoutComponent', () => {
  let component: HeadoutComponent;
  let fixture: ComponentFixture<HeadoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
