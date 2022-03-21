import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../models/person';
import { LocalStorageService } from '../../utils/local-storage.service';

const FAVORITES_STORE_KEY = 'favorites';

@Injectable({
  providedIn: 'root',
})
export class FavoritePeopleService {
  currentFavorites: Set<Person> = new Set();
  private favoritePersonList$$ = new BehaviorSubject<Person[]>([]);
  favoritePersonList$ = this.favoritePersonList$$.asObservable();

  constructor(private localStorage: LocalStorageService) {}

  loadFavorites(): void {
    const favorites: Person[] | null = this.localStorage.getData(FAVORITES_STORE_KEY);
    if (favorites) {
      if (!this.currentFavorites.size) {
        favorites.forEach(person => this.currentFavorites.add(person));
      }
      this.favoritePersonList$$.next(favorites);
    }
  }

  toggleFavorites(person: Person): boolean {
    const exist = this.currentFavorites.has(person);
    exist ? this.currentFavorites.delete(person) : this.currentFavorites.add(person);
    this.favoritePersonList$$.next([...this.currentFavorites]);
    this.localStorage.setData(FAVORITES_STORE_KEY, [...this.currentFavorites]);
    return exist;
  }
}
