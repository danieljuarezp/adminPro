import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-doughnut',
  templateUrl: './graph-doughnut.component.html',
  styleUrls: ['./graph-doughnut.component.css']
})
export class GraphDoughnutComponent implements OnInit {

  @Input('ChartLabels') doughnutChartLabels: string[] = [];
  @Input('ChartData') doughnutChartData: number[] = [];
  @Input('ChartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
