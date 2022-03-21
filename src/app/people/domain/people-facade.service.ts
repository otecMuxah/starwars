import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from './models/person';
import { PeopleStorageService } from './storage/people-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PeopleFacadeService {
  people$: Observable<Person[]> = this.peopleStorageService.people$;
  peopleCount$ = this.peopleStorageService.peopleCount$;
  currentPage$ = new BehaviorSubject(this.peopleStorageService.currentPage);

  constructor(private peopleStorageService: PeopleStorageService) {}

  initFacade(): void {
    this.peopleStorageService.initStorage();
  }

  loadPage(num: number): void {
    this.currentPage$.next(num);
    this.peopleStorageService.resolveCachedData(num);
  }
}
