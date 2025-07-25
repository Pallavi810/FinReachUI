import { Component, Input, SimpleChanges } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from "ag-charts-community";

@Component({
  selector: 'app-chart-by-region',
  imports: [AgCharts],
  templateUrl: './chart-by-region.component.html',
  styleUrl: './chart-by-region.component.css'
})
export class ChartByRegionComponent {
  public options: AgChartOptions;
  @Input() chartData: any;
  constructor() {
    this.options = {
      title: {
        text: "Gender Distribution by Region",
      },
      tooltip: {
        enabled: true,
        mode: "single",
      },
      series: [
        {
          type: "bar",
          direction: "horizontal",
          xKey: "location",
          yKey: "maleDormantCount",
          yName: "Male",
        },
        {
          type: "bar",
          direction: "horizontal",
          xKey: "location",
          yKey: "femaleDormantCount",
          yName: "Female",
        }
      ],
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.setChartData();
    }
  }
  ngOnInit() {
    setTimeout(() => {
      this.setChartData()// Trigger change detection
    }, 0);
  }

  setChartData() {
    this.formatChartData()
    this.options.data = this.chartData;
    this.options = { ...this.options };
  }
  formatChartData() {
    if (this.chartData && this.chartData.length > 0) {
      this.chartData.forEach((data: { location: string }) => {
        data.location = data.location.slice(0, data.location.indexOf(','))
      })
    }
  }
}
