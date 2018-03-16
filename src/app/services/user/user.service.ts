import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { urlServices } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
declare var swal: any;

@Injectable()
export class UserService {

  user: User;
  token: string;

  constructor(public http: HttpClient, public router: Router) {
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
    localStorage.clear();
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

}
