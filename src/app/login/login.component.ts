import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public _userService: UserService) { }

 rememberMe: boolean = false;
 username: string;
 auth2: any;

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.username = localStorage.getItem('Username') || '';
    if (this.username.length > 1) {
      this.rememberMe = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '121648628505-mhttsrncfgpvc4fftrcqtsff68dmjhbd.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }

  attachSignIn( element ) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      let profile = googleUser.getBasicProfile();

      let token = googleUser.getAuthResponse().id_token;

      this._userService.loginGoogle(token)
                        .subscribe( () => window.location.href = '#/dashboard');

    });
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
      }

      let user = new User(
        null,
        null,
        form.value.username,
        form.value.username,
        form.value.password
      );

      this._userService.login(user, form.value.rememberme)
                        .subscribe( () => this.router.navigate(['/dashboard']));
  }

}
