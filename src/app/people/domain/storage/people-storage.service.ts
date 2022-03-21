import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Person } from '../models/person';
import { LocalStorageService } from '../../../utils/local-storage.service';
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

  peopleCount$ = this.peopleCount$$.asObservable();

  constructor(private localStorage: LocalStorageService, private people: PeopleCachedService) {}

  setPeopleCount(num: number): void {
    this.peopleCount$$.next(num);
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
          this.localStorage.setData(PEOPLE_COUNT_STORE_KEY, data.count);
          this.setPeopleCount(+data.count);
        }),
        map(res => res.results),
      )
      .subscribe(people => this.people$.next(people));
  }
}
