import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styles: []
})
export class ProgressComponent implements OnInit {
  percent1: number = 20;
  percent2: number = 30;
  constructor() {}

  ngOnInit() {}

  actualizar(event: number) {
this.percent1 = event;
  }

}
