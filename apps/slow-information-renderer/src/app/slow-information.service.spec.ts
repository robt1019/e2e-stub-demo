import { TestBed } from '@angular/core/testing';

import { SlowInformationService } from './slow-information.service';

describe('SlowInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlowInformationService = TestBed.get(SlowInformationService);
    expect(service).toBeTruthy();
  });
});
