import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap, withLatestFrom } from 'rxjs';
import { Person } from '../../../shared/models/person';
import { LocalStorageService } from '../../../utils/local-storage.service';
import { PeopleCachedService } from '../cache/people-cached.service';
import { FavoritePeopleService } from '../../../shared/storage/favorite-people.service';

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

  peopleFavorites$ = this.favoritePeopleService.favoritePersonList$;

  constructor(
    private localStorage: LocalStorageService,
    private people: PeopleCachedService,
    private favoritePeopleService: FavoritePeopleService,
  ) {}

  setPeopleCount(num: number): void {
    this.peopleCount$$.next(num);
  }

  initStorage(): void {
    this.favoritePeopleService.loadFavorites();
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
        withLatestFrom(this.favoritePeopleService.favoritePersonList$),
        map(([people, favorites]) => {
          // TODO: if there is big data - need to optimize data structures to reduce algorithm complexity
          return people.map(person => {
            person.favorite = favorites.some(el => el.url === person.url);
            return person;
          });
        }),
      )
      .subscribe(people => this.people$.next(people));
  }
}
