import {Pipe, PipeTransform} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {Nullish} from '../lycoris-types';

@Pipe({
  name: 'url',
})
export class UrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: Nullish<string>): Nullish<SafeUrl> {
    return value ? this.sanitizer.bypassSecurityTrustUrl(value) : null;
  }

}
