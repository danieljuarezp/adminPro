import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlServices } from '../../config/config';
declare var swal: any;

@Injectable()
export class CompanyService {

  token: string = localStorage.getItem('Token');

  constructor(public http: HttpClient) { }

  loadCompanies() {
    let url = urlServices + '/Company';

    return this.http.get(url);
  }

  getCompanyById(id: string) {
    let url = urlServices + '/Company';

    return this.http.get(url);
  }

  removeCompany(name: string) {
    let url = urlServices + '/Company/' + name;
    url += '?token=' + this.token;
    
    return this.http.delete(url)
                    .map( resp => {
                      swal('Empresa borrada', 'Eliminada correctamente', 'success');
                      return true;
                    });
  }

  createCompany(name: string) {
    let url = urlServices + '/Company';
    url += '?token=' + this.token;

    return this.http.post(url, name)
                    .map((resp: any) => {
                      swal('Empresa Creada', resp.company.name, 'success');
                      return resp.company;
                    });
  }

  searchCompany(val: string) {
    let url = urlServices + '/Search/Collection/Company/' + val;

    return this.http.get(url)
                    .map((resp: any) => resp.Company);
  }

  updateCompany(name: string) {

    let url = urlServices + '/Company/' + name;
    url += '?token=' + this.token;

    return this.http.put(url)
                    .map((resp: any) => {
                      swal('Empresa Actualizada', resp.Company.Name, 'success');
                      return resp.company;
                    });
  }

}
