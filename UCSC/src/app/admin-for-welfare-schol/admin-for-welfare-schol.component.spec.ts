import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForWelfareScholComponent } from './admin-for-welfare-schol.component';

describe('AdminForWelfareScholComponent', () => {
  let component: AdminForWelfareScholComponent;
  let fixture: ComponentFixture<AdminForWelfareScholComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminForWelfareScholComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForWelfareScholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
