import { Injectable } from '@angular/core';
import { CachedRequest } from '../../../utils/cached-request';
import { LocalStorageService } from '../../../people/domain/storage/local-storage.service';
import { PersonService } from '../api/person.service';
import { Person } from '../../../people/domain/models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonCacheableService extends CachedRequest<Person> {
  constructor(localStorage: LocalStorageService, service: PersonService) {
    super(localStorage, service);
  }
}
