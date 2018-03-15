import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { urlServices } from '../../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) { }

  createUser(user: User) {
    let url = urlServices + '/User';

    return this.http.post(url, user)
                    .map((resp: any) => {
                      swal('Usuario Creado', user.username, 'success');
                      return resp.user;
                    });
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
                      localStorage.setItem('Id', resp.id);
                      localStorage.setItem('Token', resp.token);
                      localStorage.setItem('User', JSON.stringify(resp.user));
                    });
  }

}
