import { TestBed } from '@angular/core/testing';

import { OnlyLoggedInAdminGuardService } from './only-logged-in-admin-guard.service';

describe('OnlyLoggedInAdminGuardService', () => {
  let service: OnlyLoggedInAdminGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyLoggedInAdminGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
