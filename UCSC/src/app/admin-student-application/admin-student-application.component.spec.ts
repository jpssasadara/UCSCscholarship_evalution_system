import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentApplicationComponent } from './admin-student-application.component';

describe('AdminStudentApplicationComponent', () => {
  let component: AdminStudentApplicationComponent;
  let fixture: ComponentFixture<AdminStudentApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
