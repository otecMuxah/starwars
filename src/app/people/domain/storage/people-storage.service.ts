import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Person } from '../models/person';
import { PeopleService } from '../api/people.service';
import { LocalStorageService } from './local-storage.service';
import { PeopleCachedService } from '../cache/people-cached.service';

const PEOPLE_STORE_KEY = 'people';
const PEOPLE_COUNT_STORE_KEY = 'peopleCount';

@Injectable({
  providedIn: 'root',
})
export class PeopleStorageService {
  currentPage = 1;
  people$: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);

  private peopleCount$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private peopleNextPage$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private peoplePreviousPage$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  peopleCount$ = this.peopleCount$$.asObservable();
  peopleNextPage$ = this.peopleNextPage$$.asObservable();
  peoplePreviousPage$ = this.peoplePreviousPage$$.asObservable();

  constructor(private peopleApi: PeopleService, private localStorage: LocalStorageService, private people: PeopleCachedService) {}

  setPeopleCount(num: number): void {
    this.peopleCount$$.next(num);
  }

  setPeopleNextPage(num: number): void {
    this.peopleNextPage$$.next(num);
  }

  setPeoplePreviousPage(num: number): void {
    this.peoplePreviousPage$$.next(num);
  }

  initStorage(): void {
    this.resolveCachedData(this.currentPage);
  }

  resolveCachedData(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.people
      .resolveCachedData(pageNumber, PEOPLE_STORE_KEY)
      .pipe(
        tap(data => {
          debugger;
          this.localStorage.setData(PEOPLE_COUNT_STORE_KEY, data.count);
          this.setPeopleCount(+data.count);
          this.setPeopleNextPage(+data.next);
          this.setPeoplePreviousPage(+data.previous);
        }),
        map(res => res.results),
      )
      .subscribe(people => this.people$.next(people));
  }
}
