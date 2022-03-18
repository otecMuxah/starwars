import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setData(path: string, data: unknown): void {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(path, jsonData);
  }

  getData(path: string): string | null {
    return localStorage.getItem(path);
  }

  removeData(path: string): void {
    localStorage.removeItem(path);
  }
}
