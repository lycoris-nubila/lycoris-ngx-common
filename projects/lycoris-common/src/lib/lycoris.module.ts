import {NgModule} from '@angular/core';
import {DurationPipe} from './pipes/duration.pipe';
import {NgLetDirective} from './directives/ng-let.directive';
import {HtmlPipe} from './pipes/html.pipe';
import {UrlPipe} from './pipes/url.pipe';
import {ResourceUrlPipe} from './pipes/resource-url.pipe';
import {ToFormatPipe} from './pipes/to-format.pipe';
import {ToLocaleStringPipe} from './pipes/to-locale-string.pipe';
import {NullIfEmptyPipe} from './pipes/null-if-empty.pipe';
import {IsNilPipe} from './pipes/is-nil.pipe';
import {ToDateTimePipe} from './pipes/to-datetime.pipe';
import {BlankIfNullPipe} from './pipes/blank-if-null.pipe';
import {EmptyIfNullPipe} from './pipes/empty-if-null.pipe';

const elements = [
  NgLetDirective,
  HtmlPipe,
  UrlPipe,
  IsNilPipe,
  NullIfEmptyPipe,
  BlankIfNullPipe,
  EmptyIfNullPipe,
  ResourceUrlPipe,
  ToFormatPipe,
  ToDateTimePipe,
  DurationPipe,
  ToLocaleStringPipe];

@NgModule({
  declarations: elements, exports: elements,
})
export class LycorisModule {
}
