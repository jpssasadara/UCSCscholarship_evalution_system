import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsSaveComponent } from './payments-save.component';

describe('PaymentsSaveComponent', () => {
  let component: PaymentsSaveComponent;
  let fixture: ComponentFixture<PaymentsSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
