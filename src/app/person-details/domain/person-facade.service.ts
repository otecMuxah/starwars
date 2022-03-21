import { Injectable } from '@angular/core';
import { Person } from '../../people/domain/models/person';
import { BehaviorSubject, take, tap } from 'rxjs';
import { Film } from './models/film';
import { PersonCacheableService } from './cache/person-cacheable.service';
import { FilmCacheableService } from './cache/film-cacheable.service';

const FILM_STORE_KEY = 'film';
const PERSON_STORE_KEY = 'person';

@Injectable({
  providedIn: 'root',
})
export class PersonFacadeService {
  person$ = new BehaviorSubject<Person>({} as Person);
  filmList$ = new BehaviorSubject<Film[]>([]);

  constructor(private personService: PersonCacheableService, private filmService: FilmCacheableService) {}

  getPerson(id: string): void {
    this.personService
      .resolveCachedData(+id, PERSON_STORE_KEY)
      .pipe(
        take(1),
        tap(data => {
          const idList = data.films.map(el => el.split('/').slice(-2, -1));
          this.getFilms(idList.flat(2));
        }),
      )
      .subscribe(data => this.person$.next(data as Person));
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
}
