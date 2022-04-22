import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {isNotError} from '../lycoris-utils';

export function filterError<T>(source: Observable<T | Error>): Observable<T> {
  return source.pipe(filter(isNotError));
}
