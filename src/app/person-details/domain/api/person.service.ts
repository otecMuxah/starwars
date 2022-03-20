import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../../people/domain/models/person';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(`${environment.base_url}people/${id}`);
  }
}
