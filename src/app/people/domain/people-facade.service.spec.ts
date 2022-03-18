import { TestBed } from '@angular/core/testing';

import { PeopleFacadeService } from './people-facade.service';

describe('PeopleFacadeService', () => {
  let service: PeopleFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
