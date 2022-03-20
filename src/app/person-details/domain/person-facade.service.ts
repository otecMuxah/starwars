import { Injectable } from '@angular/core';
import { PersonService } from './api/person.service';
import { Person } from '../../people/domain/models/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonFacadeService {
  person$!: Observable<Person>;

  constructor(private personService: PersonService) {}

  getPerson(id: string) {
    this.person$ = this.personService.getPerson(id);
  }
}
