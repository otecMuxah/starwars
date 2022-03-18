import { Injectable } from '@angular/core';
import { PeopleService } from './api/people.service';
import { LocalStorageService } from './storage/local-storage.service';
import { Observable } from 'rxjs';
import { Person } from './models/person';

const PEOPLE_STORE_KEY = 'people';

@Injectable({
  providedIn: 'root',
})
export class PeopleFacadeService {
  people$!: Observable<Person[]>;

  constructor(private peopleApi: PeopleService, private storage: LocalStorageService) {}

  getPeople(): void {
    this.people$ = this.peopleApi.getPeople();
  }
}
