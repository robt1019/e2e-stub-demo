import { TestBed } from '@angular/core/testing';

import { StubSlowInformationService } from './stub-slow-information.service';

describe('StubSlowInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StubSlowInformationService = TestBed.get(StubSlowInformationService);
    expect(service).toBeTruthy();
  });
});
