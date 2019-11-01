import { TestBed } from '@angular/core/testing';

import { StoremanagementService } from './storemanagement-.service';

describe('StoremanagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoremanagementService = TestBed.get(StoremanagementService);
    expect(service).toBeTruthy();
  });
});
