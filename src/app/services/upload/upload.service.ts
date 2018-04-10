import { Injectable } from '@angular/core';
import { urlServices } from '../../config/config';

@Injectable()
export class UploadService {

  constructor() { }

  uploadFile(file: File, collection: string, id: string) {

    return new Promise( (resolve, reject ) => {
    let formData = new FormData();
    let xhr = new XMLHttpRequest();

    formData.append('img', file, file.name);

    xhr.onreadystatechange = () => {
           
      if ( xhr.readyState === 4) {

        if ( xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(JSON.parse(xhr.response));
        }
      }
    };

    let url = urlServices + '/Upload/' + collection + '/' + id;

    xhr.open('PUT', url, true);
    xhr.send(formData);

    });

  }

}
