import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SafeResourceUrl} from '@angular/platform-browser';
import {Nullish} from '../lycoris-types';

@Pipe({
  name: 'resourceUrl',
})
export class ResourceUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: Nullish<string>): Nullish<SafeResourceUrl> {
    return value ? this.sanitizer.bypassSecurityTrustResourceUrl(value) : null;
  }

}
