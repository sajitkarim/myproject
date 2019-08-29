import { TestBed } from '@angular/core/testing';

import { SiblingserviceService } from './siblingservice.service';

describe('SiblingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiblingserviceService = TestBed.get(SiblingserviceService);
    expect(service).toBeTruthy();
  });
});
