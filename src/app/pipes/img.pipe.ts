import { Pipe, PipeTransform } from '@angular/core';
import { urlServices } from '../config/config';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(img: string, collection: string = 'Users'): any {
    
    let url =  urlServices + '/Img/';

    if (!img) {
       return url + 'Users/NoFound';
    }

    if (img.indexOf('https') >= 0 ) {
      return img;
    }

    switch (collection) {
      case 'Users':
       url += '/Users/' + img;
      break;
      case 'Employees':
       url += '/Employees/' + img;
      break;
      case 'Companies':
       url += '/Companies/' + img;
      break;
      default:
      console.log('Coleccion no valida', collection);
      url += 'Users/NoFound';
      break;
    }

    return url;
  }

}
