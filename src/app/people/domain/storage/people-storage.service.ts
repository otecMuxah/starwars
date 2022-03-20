import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take, tap } from 'rxjs';
import { Person } from '../models/person';
import { PeopleService } from '../api/people.service';
import { LocalStorageService } from './local-storage.service';

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

  constructor(private peopleApi: PeopleService, private localStorage: LocalStorageService) {}

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

    const storedPeople: Person[] = this.localStorage.getData(PEOPLE_STORE_KEY + this.currentPage) || [];
    const storedPeopleCount: number = this.localStorage.getData(PEOPLE_COUNT_STORE_KEY) || 0;

    if (!storedPeople.length) {
      this.peopleApi
        .getPeople(pageNumber)
        .pipe(
          take(1),
          tap(data => {
            this.localStorage.setData(PEOPLE_STORE_KEY + this.currentPage, data.results);
            this.localStorage.setData(PEOPLE_COUNT_STORE_KEY, data.count);
            this.setPeopleCount(+data.count);
            this.setPeopleNextPage(+data.next);
            this.setPeoplePreviousPage(+data.previous);
          }),
          map(res => res.results),
        )
        .subscribe(data => {
          this.people$.next(data);
        });
    } else {
      this.people$.next(storedPeople);
    }

    if (storedPeopleCount) {
      this.setPeopleCount(storedPeopleCount);
    }
  }
}
