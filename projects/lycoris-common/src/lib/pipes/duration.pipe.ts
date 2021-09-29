import {Pipe, PipeTransform} from '@angular/core';
import {Duration, DurationOptions} from 'luxon';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {

  constructor() {
  }

  transform(value: string, options?: DurationOptions): Duration {
    return Duration.fromISO(value, options);
  }

}
