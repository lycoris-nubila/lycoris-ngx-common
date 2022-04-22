import {Pipe, PipeTransform} from '@angular/core';
import isNil from 'lodash-es/isNil';
import {Nullish} from '../lycoris-types';

@Pipe({
  name: 'isNil',
})
export class IsNilPipe implements PipeTransform {

  transform(value: Nullish<unknown>): Nullish<boolean> {
    return isNil(value);
  }

}
