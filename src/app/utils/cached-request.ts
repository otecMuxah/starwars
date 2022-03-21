import { LocalStorageService } from './local-storage.service';
import { Observable, of, take, tap } from 'rxjs';

export interface CacheableService<T> {
  getData: (id: number) => Observable<T>;
}

export class CachedRequest<T> {
  constructor(private localStorage: LocalStorageService, protected service: CacheableService<T>) {}

  resolveCachedData(dataId: number, storeKey: string): Observable<T> {
    const storedData: T | null = this.localStorage.getData(storeKey + dataId) || null;

    if (!storedData) {
      return this.service.getData(+dataId).pipe(
        take(1),
        tap(data => {
          this.localStorage.setData(storeKey + dataId, data);
        }),
      );
    }
    return of(storedData);
  }
}
