import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getData(pageNumber = 1): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.base_url}${pageNumber ? 'people/?page=' + pageNumber : 'people'}`);
  }
}
