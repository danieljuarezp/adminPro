import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/service.index';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  // buscar los ajustes del usuario en la base de datos
  constructor(public _settings: SettingsService) {}

  ngOnInit() {
    init_plugins();
  }

}
