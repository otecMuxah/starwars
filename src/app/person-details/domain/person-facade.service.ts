import { Injectable } from '@angular/core';
import { PersonService } from './api/person.service';
import { Person } from '../../people/domain/models/person';
import { BehaviorSubject, map, Observable, take, tap } from 'rxjs';
import { LocalStorageService } from '../../people/domain/storage/local-storage.service';
import { Film } from './models/film';

const FILM_STORE_KEY = 'film';

@Injectable({
  providedIn: 'root',
})
export class PersonFacadeService {
  person$!: Observable<Person>;
  filmList$ = new BehaviorSubject<Film[]>([]);

  constructor(private personService: PersonService, private localStorage: LocalStorageService) {}

  getPerson(id: string) {
    this.person$ = this.personService.getPerson(id).pipe(
      tap(data => {
        const idList = data.films.map(el => el.split('/').slice(-2, -1));
        this.filmList$.next(this.resolveCachedFilms(idList.flat(2)));
      }),
    );
  }

  resolveCachedFilms(filmNumberList: string[]): Film[] {
    const result: Film[] = [];
    for (let filmNumber of filmNumberList) {
      const storedData: Film = this.localStorage.getData(FILM_STORE_KEY + filmNumber) || ({} as Film);

      if (!storedData.title) {
        this.personService
          .getFilm(+filmNumber)
          .pipe(
            take(1),
            tap(data => {
              this.localStorage.setData(FILM_STORE_KEY + filmNumber, data);
            }),
          )
          .subscribe(data => {
            result.push(data);
          });
      } else {
        result.push(storedData);
      }
    }
    return result;
  }
}
