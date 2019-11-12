import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkTalksComponent } from './think-talks.component';

describe('ThinkTalksComponent', () => {
  let component: ThinkTalksComponent;
  let fixture: ComponentFixture<ThinkTalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinkTalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
