import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setData(path: string, data: unknown): void {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(path, jsonData);
  }

  getData<T>(path: string): T | null {
    let data;
    let rawdata = localStorage.getItem(path);
    if (rawdata) {
      try {
        data = JSON.parse(rawdata || '');
      } catch (e) {
        console.error(e);
      }
    }

    return data;
  }

  removeData(path: string): void {
    localStorage.removeItem(path);
  }
}
