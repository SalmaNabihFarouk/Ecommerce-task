import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class MytranslateService {
private readonly _TranslateService =inject(TranslateService)
  constructor() { 
    let savelang=localStorage.getItem('lang')

    this._TranslateService.setDefaultLang('en')
    this._TranslateService.use(savelang !)
  }
  
changeDirection(): void {
  let savedLang = localStorage.getItem("lang");
  if (savedLang ==='en'){
 
  document.documentElement.dir='ltr'
  }
  else if (savedLang === 'ar') {
  // dir rtl
  document.documentElement.dir= 'rtl';
}
}
}
