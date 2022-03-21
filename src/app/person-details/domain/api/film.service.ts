import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getData(id: number): Observable<Film> {
    return this.http.get<Film>(`${environment.base_url}films/${id}`);
  }
}
