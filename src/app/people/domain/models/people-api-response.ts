import { Person } from '../../../shared/models/person';

export interface PeopleApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}
