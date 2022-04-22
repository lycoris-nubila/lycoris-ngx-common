import {Pipe, PipeTransform} from '@angular/core';
import {Duration, DurationOptions} from 'luxon';
import {Nullish} from '../lycoris-types';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {

  transform(
    value: Nullish<string>, options?: DurationOptions): Nullish<Duration> {
    return value ? Duration.fromISO(value, options) : null;
  }

}
