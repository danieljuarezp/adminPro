import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  pagination: number = 0;
  total: number = 0;
  loading: boolean = true;

  constructor(public _userService: UserService) { }

  ngOnInit() {
    this.loadusers();
  }

  loadusers() {
    this.loading = true;
    this._userService.loadUsers(this.pagination)
                      .subscribe((resp: any) => {
                        this.total = resp.count;
                        this.users = resp.usuarios;
                        this.loading = false;
                      });
  }

  changePagination(val: number) {

    let nextPagination: number = this.pagination + val;

    if (nextPagination >= this.total) {
      return;
    }
    if (nextPagination < 0 ) {
      return;
    }

    this.pagination += val;
    this.loadusers();
  }

  searchUser(val: string) {

    if (val.length <= 0) {
      this.loadusers();
      return;
    }

    this.loading = true;

  this._userService.searchUser(val)
                    .subscribe((users: User[]) => {             
                      this.users = users;
                      this.loading = false;
                    });
  }

}
