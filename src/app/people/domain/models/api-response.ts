import { Person } from './person';

export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}
