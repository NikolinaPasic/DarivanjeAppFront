import { TestBed } from '@angular/core/testing';

import { DarivanjeService } from './darivanje.service';

describe('DarivanjeService', () => {
  let service: DarivanjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarivanjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
