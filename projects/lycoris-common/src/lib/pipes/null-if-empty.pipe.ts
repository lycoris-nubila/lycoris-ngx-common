import {Pipe, PipeTransform} from '@angular/core';
import isEmpty from 'lodash-es/isEmpty';

@Pipe({
  name: 'nullIfEmpty',
})
export class NullIfEmptyPipe implements PipeTransform {

  transform<T>(value: T[]): T[] {
    return isEmpty(value) ? null : value;
  }

}
