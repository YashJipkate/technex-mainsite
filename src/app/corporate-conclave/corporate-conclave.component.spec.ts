import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateConclaveComponent } from './corporate-conclave.component';

describe('CorporateConclaveComponent', () => {
  let component: CorporateConclaveComponent;
  let fixture: ComponentFixture<CorporateConclaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateConclaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateConclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
