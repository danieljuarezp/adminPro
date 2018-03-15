import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

declare var swal: any;
declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(public _userService: UserService, public router: Router) { }

  passwordMatch(password: string, confirmPassword: string) {

    return (formGroup: FormGroup) => {

      let password1 = formGroup.controls[password].value;
      let password2 = formGroup.controls[confirmPassword].value;

      if (password1 === password2) {
        return null;
      }

      return {
        passwordMatch: true
      };

    };
  }

  ngOnInit() {
    init_plugins();

    this.form = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmpassword: new FormControl(null, Validators.required),
      conditions: new FormControl(false),
    }, { validators: this.passwordMatch('password', 'confirmpassword') });

  }

  saveUser() {
    if (this.form.invalid) {
    return;
    }
    if (!this.form.value.conditions) {
      swal('Importante!', 'Debe de aceptar las condiciones', 'warning');
      return;
      }

      let user = new User(
        this.form.value.firstname,
        this.form.value.lastname,
        this.form.value.username,
        this.form.value.email,
        this.form.value.password
      );

      this._userService.createUser(user)
      .subscribe(resp => this.router.navigate(['/login']));
  }

}
