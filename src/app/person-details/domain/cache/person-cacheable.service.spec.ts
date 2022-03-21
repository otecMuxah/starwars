import { TestBed } from '@angular/core/testing';

import { PersonCacheableService } from './person-cacheable.service';

describe('PersonCacheableService', () => {
  let service: PersonCacheableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonCacheableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
