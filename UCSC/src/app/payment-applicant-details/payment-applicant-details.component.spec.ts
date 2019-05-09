import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentApplicantDetailsComponent } from './payment-applicant-details.component';

describe('PaymentApplicantDetailsComponent', () => {
  let component: PaymentApplicantDetailsComponent;
  let fixture: ComponentFixture<PaymentApplicantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentApplicantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentApplicantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
