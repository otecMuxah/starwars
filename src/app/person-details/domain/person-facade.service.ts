import { Injectable } from '@angular/core';
import { Person } from '../../shared/models/person';
import { BehaviorSubject, take, tap, withLatestFrom } from 'rxjs';
import { Film } from './models/film';
import { PersonCacheableService } from './cache/person-cacheable.service';
import { FilmCacheableService } from './cache/film-cacheable.service';
import { FavoritePeopleService } from '../../shared/storage/favorite-people.service';
import { LocalStorageService } from '../../utils/local-storage.service';

const FILM_STORE_KEY = 'film';
const PERSON_STORE_KEY = 'person';

@Injectable({
  providedIn: 'root',
})
export class PersonFacadeService {
  person$ = new BehaviorSubject<Person>({} as Person);
  filmList$ = new BehaviorSubject<Film[]>([]);
  isFavorite = false;

  constructor(
    private personService: PersonCacheableService,
    private filmService: FilmCacheableService,
    private favoritePeopleService: FavoritePeopleService,
  ) {}

  getPerson(id: string): void {
    this.favoritePeopleService.loadFavorites();

    this.personService
      .resolveCachedData(+id, PERSON_STORE_KEY)
      .pipe(
        take(1),
        tap(data => {
          const idList = data.films.map(el => el.split('/').slice(-2, -1));
          this.getFilms(idList.flat(2));
        }),
        withLatestFrom(this.favoritePeopleService.favoritePersonList$),
      )
      .subscribe(([data, favoritesList]) => {
        this.person$.next(data as Person);
        this.isFavorite = favoritesList.some(el => el.url === data.url);
      });
  }

  getFilms(filmNumberList: string[]): void {
    const result: Film[] = [];
    for (let filmNumber of filmNumberList) {
      this.filmService
        .resolveCachedData(+filmNumber, FILM_STORE_KEY)
        .pipe(take(1))
        .subscribe(data => {
          result.push(data);
          this.filmList$.next(result);
        });
    }
  }

  toggleFavorite(person: Person) {
    this.isFavorite = !this.favoritePeopleService.toggleFavorites(person);
  }
}
