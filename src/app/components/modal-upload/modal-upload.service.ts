import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalUploadService {

  public collection: string;
  public id: string;
  public hide: string = 'hide';
  public notification = new EventEmitter<any>();

  constructor() { }

  hideModal() {
    this.hide = 'hide';
    this.collection = null;
    this.id = null;
  }

  showModal(collection: string, id: string) {
    this.hide = '';
    this.collection = collection;
    this.id = id;
  }

}
