import {Pipe, PipeTransform} from '@angular/core';
import {DateTime, DateTimeOptions} from 'luxon';

@Pipe({
  name: 'toDateTime',
})
export class ToDateTimePipe implements PipeTransform {

  transform(
    value: number | string | Date, options?: DateTimeOptions): DateTime {
    if (typeof value === 'number') {
      return DateTime.fromMillis(value, options);
    } else if (typeof value === 'string') {
      return DateTime.fromISO(value, options);
    } else if (value instanceof Date) {
      return DateTime.fromJSDate(value, options);
    }
  }

}
