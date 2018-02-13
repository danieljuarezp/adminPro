import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() { 



    this.count3().then(mensaje => console.log('Fin', mensaje))
    .catch(error => console.error('Error', error))

  }

  ngOnInit() {
  }

  count3() {

    return  new Promise( (resolve, reject) => {
      let count = 0;
      let interval = setInterval(()=>{
        count +=1;
        if(count===3){
          resolve('termino');
          clearInterval(interval);
        }
      },1000);
    });

  }

}
