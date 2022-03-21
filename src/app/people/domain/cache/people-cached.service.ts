import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../utils/local-storage.service';
import { CachedRequest } from '../../../utils/cached-request';
import { Person } from '../../../shared/models/person';
import { PeopleService } from '../api/people.service';
import { PeopleApiResponse } from '../models/people-api-response';

@Injectable({
  providedIn: 'root',
})
export class PeopleCachedService extends CachedRequest<PeopleApiResponse> {
  constructor(localStorage: LocalStorageService, service: PeopleService) {
    super(localStorage, service);
  }
}
