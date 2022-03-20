import { LocalStorageService } from '../people/domain/storage/local-storage.service';
import { Observable, of, take, tap } from 'rxjs';

export interface CacheableService {
  getData: (id: number) => Observable<any>;
}

export abstract class CachedRequest {
  constructor(private localStorage: LocalStorageService, protected service: CacheableService) {}

  resolveCachedData<T>(dataId: number, storeKey: string): Observable<T> {
    const storedData: T | null = this.localStorage.getData(storeKey + dataId) || null;
    let result: T;

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
