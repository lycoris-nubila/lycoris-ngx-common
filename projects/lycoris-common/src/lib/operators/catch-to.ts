import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

export const catchErrorTo = <T, R>(v: R, log = true) => (source: Observable<T>) => source.pipe(catchError((e) => {
  if (log) {
    console.log(e);
  }
  return of(v);
}));
