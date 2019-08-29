import { TestBed } from '@angular/core/testing';

import { ServiceEmpdataService } from './service-empdata.service';

describe('ServiceEmpdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceEmpdataService = TestBed.get(ServiceEmpdataService);
    expect(service).toBeTruthy();
  });
});
