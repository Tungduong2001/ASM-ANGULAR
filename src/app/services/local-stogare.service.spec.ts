import { TestBed } from '@angular/core/testing';

import { LocalStogareService } from './local-stogare.service';

describe('LocalStogareService', () => {
  let service: LocalStogareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStogareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
