import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settigs: SettingsService) { }

  ngOnInit() {
    this.applyCheck();
  }

  changeTheme(color: string, link: any) {
    this.apply(link);
    this._settigs.applyTheme(color);
  }

  apply(link: any) {

    let selectores: any = document.getElementsByClassName('selector');

    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  applyCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let theme = this._settigs.settings.theme;
    for (let ref of selectores) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
