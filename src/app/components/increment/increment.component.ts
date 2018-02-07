import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html'
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtPercent') txtPercent: ElementRef;

  @Input() percent: number;
  @Input('nombre') text: string = '';

  @Output('actualizaValor') cambio: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChange(newValue: number) {

    if (newValue >= 100) {
      this.percent = 100;
    } else if (newValue <= 0) {
      this.percent = 0;
    } else {
      this.percent = newValue;
    }

    this.txtPercent.nativeElement.value = this.percent;

    this.cambio.emit(this.percent);
  }

  cambiar(valor) {
    if (this.percent >= 100 && valor > 0) {
      this.percent = 100;
      return;
    }
    if (this.percent <= 0 && valor < 0) {
      this.percent = 0;
      return;
    }
    this.percent = this.percent + valor;
    this.cambio.emit(this.percent);
    this.txtPercent.nativeElement.focus();
  }
}
