import isNull from 'lodash-es/isNull';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

export const filterNull = <T>(orElse: T = null) => (source: Observable<T>) => source.pipe(
  map(value => isNull(value) ? orElse : value), filter(value => !isNull(value)));
