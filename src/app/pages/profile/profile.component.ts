import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';
import { element } from 'protractor';
import { read } from 'fs';
declare var swal: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;
  image: File;
  imageTemp: string;

  constructor(public _userService: UserService) {
    this.user = this._userService.user;
   }

  ngOnInit() {
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
    this._userService.changeImage(this.image, this.user._id);
  }

  Save(user: User) {
    this.user.firstname = user.firstname;
    this.user.lastname = user.lastname;
    if (!user.google) {
    this.user.email = user.email;
    } 
    this._userService.updateUser(this.user)
                      .subscribe();
  }

}
