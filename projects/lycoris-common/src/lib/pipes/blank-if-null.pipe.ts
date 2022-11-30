import { Pipe, PipeTransform } from '@angular/core';

import {Nullish} from '../lycoris-types';

@Pipe({
	name: 'blankIfNull',
})
export class BlankIfNullPipe implements PipeTransform {
	transform(value: Nullish<string>): string {
		return value ? value : '';
	}
}
