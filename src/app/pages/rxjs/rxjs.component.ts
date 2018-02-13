import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.returnObs().subscribe(
      number => console.log('subs', number),
      error => console.error('error en obs dos veces', error),
      () => console.log('Termino')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  returnObs(): Observable<any> {

    return new Observable(observer => {
      let count = 0;
      let interval = setInterval(() => {
        count += 1;
        let result = {
          val : count
        };
        observer.next(result);
        //if (count === 3) {
          //clearInterval(interval);
          //observer.complete();
        //}
        //if (count === 2) {
          //observer.error('fallo');
        //}
      }, 500);
    })
    .retry(2)
    .map(resp => {
      return resp.val;
    })
    .filter((value, index) => {
      if (value % 2 === 1) {
        // impar
        return true;
      } else {
        // par
        return false;
      }
    });

  }

}
