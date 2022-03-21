import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../utils/local-storage.service';
import { PersonService } from '../api/person.service';
import { CachedRequest } from '../../../utils/cached-request';
import { Film } from '../models/film';
import { FilmService } from '../api/film.service';

@Injectable({
  providedIn: 'root',
})
export class FilmCacheableService extends CachedRequest<Film> {
  constructor(localStorage: LocalStorageService, service: FilmService) {
    super(localStorage, service);
  }
}
