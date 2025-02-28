import { Component, inject } from '@angular/core';
import { MytranslateService } from 'src/app/mytranslate.service';

@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.css']
})
export class NavAuthComponent {
  private readonly _MytranslateService =inject(MytranslateService)
  change(lang: string):void {
    this._MytranslateService. changeLang( lang )
  }
}
