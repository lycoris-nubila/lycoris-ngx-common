import {Pipe, PipeTransform} from '@angular/core';
import {
  DateTime,
  DateTimeFormatOptions,
  Duration,
  DurationToFormatOptions,
} from 'luxon';
import {Nullish} from '../lycoris-types';

@Pipe({
  name: 'toFormat',
})
export class ToFormatPipe implements PipeTransform {

  transform(
    value: Nullish<DateTime | Duration>, format: string,
    options?: DateTimeFormatOptions | DurationToFormatOptions): Nullish<string> {
    return value?.toFormat(format, options);
  }

}
