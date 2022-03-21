import { Injectable } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import { CachedRequest } from '../../../utils/cached-request';
import { Person } from '../models/person';
import { PeopleService } from '../api/people.service';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class PeopleCachedService extends CachedRequest<ApiResponse> {
  constructor(localStorage: LocalStorageService, service: PeopleService) {
    super(localStorage, service);
  }
}
