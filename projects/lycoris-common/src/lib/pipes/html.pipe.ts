import {Pipe, PipeTransform} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {Nullish} from '../lycoris-types';

@Pipe({
  name: 'html',
})
export class HtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: Nullish<string>): Nullish<SafeHtml> {
    return value ? this.sanitizer.bypassSecurityTrustHtml(value) : null;
  }

}
