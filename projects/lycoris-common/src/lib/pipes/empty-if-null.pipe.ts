import { Pipe, PipeTransform } from '@angular/core';

import {Nullish} from '../lycoris-types';

@Pipe({
	name: 'emptyIfNull',
})
export class EmptyIfNullPipe implements PipeTransform {
	transform<T>(value: Nullish<T[]>): T[] {
		return value ? value : [];
	}
}
