import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {isNotNullish} from '../lycoris-utils';
import {Nullish} from '../lycoris-types';

export function filterNullish<T>(source: Observable<Nullish<T>>): Observable<T> {
  return source.pipe(filter(isNotNullish));
}
