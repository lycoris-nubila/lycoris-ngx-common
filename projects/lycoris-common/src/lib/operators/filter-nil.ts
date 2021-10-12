import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import isNil from 'lodash-es/isNil';

export const filterNil = <T>(orElse?: T) => (source: Observable<T>) => source.pipe(
  map(value => isNil(value) ? orElse : value), filter(value => !isNil(value)));
