import { TestBed } from '@angular/core/testing';

import { AdminRegStudentService } from './admin-reg-student.service';

describe('AdminRegStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminRegStudentService = TestBed.get(AdminRegStudentService);
    expect(service).toBeTruthy();
  });
});
