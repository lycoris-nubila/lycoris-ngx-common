import {Pipe, PipeTransform} from '@angular/core';
import {DateTime, DateTimeFormatOptions, LocaleOptions} from 'luxon';
import {Nullish} from '../lycoris-types';

@Pipe({
  name: 'toLocaleString',
})
export class ToLocaleStringPipe implements PipeTransform {

  transform(
    value: Nullish<DateTime>,
    format: LocaleOptions & DateTimeFormatOptions): Nullish<string> {
    return value?.toLocaleString(format);
  }

}
