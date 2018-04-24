import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';
declare var swal: any;

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  image: File;
  imageTemp: string;

  constructor(public _uploadService: UploadService, public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
  }

  hideModal() {
    this.image = null;
    this.imageTemp = null;
    this._modalUploadService.hideModal();
  }

  selectedImage(file: File) {

    if (!file) {
      this.image = null;
      return;
    }

    if (file.type.indexOf('image') < 0) {
      swal('Archivo incorrecto', 'Seleccione una imagen', 'error');
      this.image = null;
      return;
    }

    this.image = file;

    let reader = new FileReader();
    let urlImageTemp = reader.readAsDataURL(file);

    reader.onloadend = () => this.imageTemp = reader.result;
  }

  saveImage() {
    this._uploadService.uploadFile(this.image, this._modalUploadService.collection, this._modalUploadService.id)
                        .then( (resp: any) => {

                          this._modalUploadService.notification.emit(resp);
                          this.hideModal();

                        })
                        .catch(err => {
                          console.log(err);
                          this.hideModal();
                          swal('Error inesperado', 'No se pudo actualziar la imagen', 'error');
                        });
  }

}
