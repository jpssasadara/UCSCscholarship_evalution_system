import { TestBed } from '@angular/core/testing';

import { StudentWellfareService } from './student-wellfare.service';

describe('StudentWellfareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentWellfareService = TestBed.get(StudentWellfareService);
    expect(service).toBeTruthy();
  });
});
