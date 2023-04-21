import { Pipe, PipeTransform } from '@angular/core';
import {I18nService} from "../translate/i18n.service";

@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {

  constructor(private translationService: I18nService) {

  }

  transform(key: string, ...args: unknown[]): string {
    return this.translationService.getGetMessageFor(key);
  }

}
