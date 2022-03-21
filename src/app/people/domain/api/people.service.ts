import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PeopleApiResponse } from '../models/people-api-response';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getData(pageNumber = 1): Observable<PeopleApiResponse> {
    return this.http.get<PeopleApiResponse>(`${environment.base_url}${pageNumber ? 'people/?page=' + pageNumber : 'people'}`);
  }
}
