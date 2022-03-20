import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlToId',
})
export class UrlToIdPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const parsedArray = value.split('/');
    return parsedArray[parsedArray.length - 2];
  }
}
