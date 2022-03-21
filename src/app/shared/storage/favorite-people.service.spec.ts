import { TestBed } from '@angular/core/testing';

import { FavoritePeopleService } from './favorite-people.service';

describe('FavoritePeopleService', () => {
  let service: FavoritePeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritePeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
