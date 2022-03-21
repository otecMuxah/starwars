import { TestBed } from '@angular/core/testing';

import { FilmCacheableService } from './film-cacheable.service';

describe('FilmCacheableService', () => {
  let service: FilmCacheableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmCacheableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
