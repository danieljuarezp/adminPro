import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(public _userService: UserService) {
    this.user = this._userService.user;
   }

  ngOnInit() {
  }

  Save(user: User) {
    this.user.firstname = user.firstname;
    this.user.lastname = user.lastname;
    if (!this.user.google) {
      this.user.username = user.username;
      this.user.email = user.email;
    }

    this._userService.updateUser(user)
                      .subscribe();
  }

}
