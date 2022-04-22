import {Pipe, PipeTransform} from '@angular/core';
import {DateTime, DateTimeOptions} from 'luxon';
import {Nullish} from '../lycoris-types';

@Pipe({
  name: 'toDateTime',
})
export class ToDateTimePipe implements PipeTransform {

  transform(
    value: Nullish<number | string | Date>,
    options?: DateTimeOptions): Nullish<DateTime> {
    if (typeof value === 'number') {
      return DateTime.fromMillis(value, options);
    } else if (typeof value === 'string') {
      return DateTime.fromISO(value, options);
    } else if (value instanceof Date) {
      return DateTime.fromJSDate(value, options);
    } else {
      return null;
    }
  }

}
