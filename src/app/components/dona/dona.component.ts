import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  @Input() data: number[] = [350, 400, 450];

  @Input() title: string = '';

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: this.data },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    console.log("labels", this.labels);

    this.DataChart();

  }

  DataChart() {

    this.doughnutChartData = {
      labels: this.labels,
      datasets: [{ data: this.data }]
    }



  }


}
