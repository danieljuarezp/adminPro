import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public _userService: UserService) { }

 rememberMe: boolean = false;
 username: string;

  ngOnInit() {
    init_plugins();
    this.username = localStorage.getItem('Username') || '';
    if (this.username.length > 1) {
      this.rememberMe = true;
    }
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
                        .subscribe(success => this.router.navigate(['/dashboard']));
  }

}
