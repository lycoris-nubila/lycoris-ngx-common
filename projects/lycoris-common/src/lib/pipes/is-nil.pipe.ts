import {Pipe, PipeTransform} from '@angular/core';
import isNil from 'lodash-es/isNil';

@Pipe({
  name: 'isNil',
})
export class IsNilPipe implements PipeTransform {

  transform(value: unknown): boolean {
    return isNil(value);
  }

}
