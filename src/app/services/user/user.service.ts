import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { urlServices } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { UploadService } from '../upload/upload.service';
declare var swal: any;

@Injectable()
export class UserService {

  user: User;
  token: string;

  constructor(public http: HttpClient, public router: Router, public _uploadFile: UploadService) {
    this.loadStorage();
  }

  createUser(user: User) {
    let url = urlServices + '/User';

    return this.http.post(url, user)
                    .map((resp: any) => {
                      swal('Usuario Creado', user.username, 'success');
                      return resp.user;
                    });
  }

  updateUser(user: User) {

    let url = urlServices + '/User/' + user.username;
    url += '?token=' + this.token;

    return this.http.put(url, user)
                    .map((resp: any) => {
                      this.saveStorage(this.user._id, this.token, resp.user);
                      swal('Usuario Actualizado', resp.user.username, 'success');
                      return resp.user;
                    });
  }

  changeImage(file: File, id: string) {
    
    this._uploadFile.uploadFile(file, 'Users', id)
                    .then((resp: any) => {
                      this.user.img = resp.user.img;
                      this.saveStorage(id, this.token, this.user);
                      swal('Imagen Actualizada', resp.user.username, 'success');
                    })
                    .catch(resp => console.log(resp));

  }

  loggedIn() {
    return (this.token.length > 5 ) ? true : false;
  }

  login(user: User, remember: boolean) {

    if (remember) {
      localStorage.setItem('Username', user.username);
    } else {
      localStorage.removeItem('Username');
    }

    let url = urlServices + '/Login';

    return this.http.post(url, user)
                    .map((resp: any) => {
                      this.saveStorage(resp.id, resp.token, resp.user);
                    });
  }

  loginGoogle(token: string) {
    let url = urlServices + '/Login/Google';

    return this.http.post(url, {token})
                    .map((resp: any) => {
                    this.saveStorage(resp.id, resp.token, resp.user);
                    });
  }

  logout() {
    this.token = '';
    this.user = null;
    localStorage.removeItem('Id');
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    localStorage.removeItem('Settings');
    this.router.navigate(['/login']);
  }

  saveStorage(id: string, token: string, user: User) {
    localStorage.setItem('Id', id);
    localStorage.setItem('Token', token);
    localStorage.setItem('User', JSON.stringify(user));
    this.user = user;
    this.token = token;
  }

  loadStorage() {
    if ( localStorage.getItem('Token')) {
      this.token = localStorage.getItem('Token');
      this.user = JSON.parse(localStorage.getItem('User'));
    } else {
      this.token = '';
      this.user = null;
    }
  }

  loadUsers(pagination: number = 0) {
    let url = urlServices + '/User?pagination=' + pagination;

    return this.http.get(url);
  }

  searchUser(val: string) {
    let url = urlServices + '/Search/Collection/User/' + val;

    return this.http.get(url)
                    .map((resp: any) => resp.User);
  }

}
