import { TestBed } from '@angular/core/testing';

import { PeopleCachedService } from './people-cached.service';

describe('PeopleCachedService', () => {
  let service: PeopleCachedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleCachedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
