import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './models/person';
import { PeopleStorageService } from './storage/people-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PeopleFacadeService {
  people$: Observable<Person[]> = this.peopleStorageService.people$;
  // peopleFavorites$: Observable<Person[]> = this.peopleStorageService.peopleFavorites$;
  peopleCount$ = this.peopleStorageService.peopleCount$;
  peopleNextPage$ = this.peopleStorageService.peopleNextPage$;
  peoplePreviousPage$ = this.peopleStorageService.peoplePreviousPage$;

  constructor(private peopleStorageService: PeopleStorageService) {}

  initFacade(): void {
    this.peopleStorageService.initStorage();

    this.people$ = this.peopleStorageService.people$;
    // this.peopleFavorites$ = this.peopleStorageService.peopleFavorites$;

    this.people$.subscribe(data => {
      console.log(data);
    });
  }

  loadPage(num: number): void {
    this.peopleStorageService.resolveCachedData(num);
  }
}
