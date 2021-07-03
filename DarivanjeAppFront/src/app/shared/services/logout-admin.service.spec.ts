import { TestBed } from '@angular/core/testing';

import { LogoutAdminService } from './logout-admin.service';

describe('LogoutAdminService', () => {
  let service: LogoutAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
