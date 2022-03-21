import { Person } from './person';

export interface PeopleApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}
