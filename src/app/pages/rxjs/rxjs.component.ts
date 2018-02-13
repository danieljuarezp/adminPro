import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { 

    this.returnObs().subscribe(
      number => console.log('subs', number),
      error => console.error('error en obs dos veces', error),
      () => console.log('Termino')
    );

  }

  ngOnInit() {
  }

  returnObs(): Observable<any> {

    return new Observable(observer => {
      let count = 0;
      let interval = setInterval(()=>{
        count+=1;
        observer.next(count);
        if(count === 3){
          clearInterval(interval);
          observer.complete();
        }
        if(count === 2){
          observer.error('fallo');
        }
      },1000);
    }).retry(2);

  }

}
