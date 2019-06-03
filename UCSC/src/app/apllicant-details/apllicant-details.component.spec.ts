import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApllicantDetailsComponent } from './apllicant-details.component';

describe('ApllicantDetailsComponent', () => {
  let component: ApllicantDetailsComponent;
  let fixture: ComponentFixture<ApllicantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApllicantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApllicantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
