import {Pipe, PipeTransform} from '@angular/core';
import isEmpty from 'lodash-es/isEmpty';
import {Nullish} from '../lycoris-types';

@Pipe({
  name: 'nullIfEmpty',
})
export class NullIfEmptyPipe implements PipeTransform {

  transform<T>(value: T[]): Nullish<T[]> {
    return isEmpty(value) ? null : value;
  }

}
