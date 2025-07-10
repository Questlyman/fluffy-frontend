import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  lang!: string;
  readonly supported_langs: {[key: string]: string} = {
    ru: 'Русский',
    en: 'English'
  };
  langService: BehaviorSubject<string>;
  refresh_lang$ : Observable<string>;
  constructor(private translate: TranslateService){
    const local_lang = localStorage.getItem('lang');
    const brow_lang = this.translate.getBrowserLang();
    this.lang = (local_lang && Object.keys(this.supported_langs).includes(local_lang)) ? local_lang :
      brow_lang && Object.keys(this.supported_langs).includes(brow_lang) ? brow_lang : 'en'
    this.translate.use(this.lang)
    console.log(this.lang)
    this.langService = new BehaviorSubject<string>(this.lang);
    this.refresh_lang$ = this.langService.asObservable();
  }

  
  
  
  setLanguage(language: string){
    this.translate.use(language);
    localStorage.setItem('lang', language);
    this.langService.next(language);
  }
}
