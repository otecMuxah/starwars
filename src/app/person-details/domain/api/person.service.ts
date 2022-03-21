import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../../shared/models/person';
import { environment } from '../../../../environments/environment';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getData(id: number): Observable<Person> {
    return this.http.get<Person>(`${environment.base_url}people/${id}`);
  }
}
