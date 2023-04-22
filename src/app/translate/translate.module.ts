import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {I18nService} from "./translate/i18n.service";
import {I18nPipe} from "./i18n-pipe/i18n.pipe";

const setTranslationFactory = (translationService: I18nService) => {
  return () => translationService.getMessages();
};

@NgModule({
  providers:[
    {
      provide: APP_INITIALIZER,
      useFactory: setTranslationFactory,
      deps: [I18nService],
      multi: true
    }
  ],
  declarations: [
    I18nPipe
  ],
  exports: [
    I18nPipe
  ],
  imports: [
    CommonModule
  ]
})
export class TranslateModule { }
