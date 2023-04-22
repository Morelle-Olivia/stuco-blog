import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const CURRENT_LANGUAGE_STORE_KEY = 'language';
const DEFAULT_LANGUAGE = {
  id: 'fr',
  title: 'Francais'
};



@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private supportedLanguages: any[] = [
    DEFAULT_LANGUAGE,
    {
      id: 'en',
      title: 'English'
    }
  ];

  private currentLanguage = this.supportedLanguages[0];
  private messages: any = {};

  constructor(
      private http: HttpClient,
  ) {
  }

  getGetMessageFor(key: string): string {
    return (this.messages[key] ?? key);
  }

  getLanguages(): any[] {
    return this.supportedLanguages;
  }

  getCurrentLanguage(): any {
    return this.currentLanguage;
  }

  useLanguage(language: any): void {
    if (this.currentLanguage.id !== language) {

      this.currentLanguage = this.supportedLanguages.find(l => l.id = language);

      localStorage.setItem(CURRENT_LANGUAGE_STORE_KEY, language);

      location.reload();
    }
  }

  getMessages(): Promise<{}> {
    let currentLanguage = localStorage.getItem(CURRENT_LANGUAGE_STORE_KEY);

    if (currentLanguage) {
      this.currentLanguage = this.supportedLanguages.find(l => l.id==currentLanguage);
    }
    const jsonLocation = `/assets/locales/${this.currentLanguage.id}.json`;

    return new Promise<{}>((resolve, reject) => {
      this.http.get<{}>(jsonLocation)
          .subscribe(langMessages => {
                if (langMessages) {
                  this.messages = langMessages;
                  resolve(this.messages);
                }
              }, error => {
                resolve(this.messages);
              }
          );
    });
  }
}
