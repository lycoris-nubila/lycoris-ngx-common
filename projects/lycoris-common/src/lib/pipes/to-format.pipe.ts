import {Pipe, PipeTransform} from '@angular/core';
import {
  DateTime,
  DateTimeFormatOptions,
  Duration,
  DurationToFormatOptions,
} from 'luxon';

@Pipe({
  name: 'toFormat',
})
export class ToFormatPipe implements PipeTransform {

  transform(
    value: DateTime | Duration, format: string,
    options?: DateTimeFormatOptions | DurationToFormatOptions): string {
    return value?.toFormat(format, options);
  }

}
