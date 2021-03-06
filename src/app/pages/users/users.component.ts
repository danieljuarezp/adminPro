import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
declare var swal: any;

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

  constructor(public _userService: UserService, public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
    this.loadusers();
    this._modalUploadService.notification
            .subscribe( resp => this.loadusers());
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

  removeUser(user) {
    if(user._id === this._userService.user._id) {
      swal('No se puede borrar usuario', user.username, 'error');
      return;
    }

    swal({
      title:'Confirmación',
      text:'Seguro de eliminar a ' + user.username,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((remove) => {

      if (remove) {

        this._userService.removeUser(user.username)
        .subscribe(deleted => {
          this.pagination = 0;
          this.loadusers();
        });

      }

    });

  }

  saveUser(user: User) {
    this._userService.updateUser(user)
                      .subscribe();
  }

  showModal(id: string) {
    this._modalUploadService.showModal('Users', id);
  }

}
