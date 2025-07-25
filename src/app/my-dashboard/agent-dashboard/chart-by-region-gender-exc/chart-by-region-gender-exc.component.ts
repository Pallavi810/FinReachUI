import { Component, Input, SimpleChanges } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-angular';

@Component({
  selector: 'app-chart-by-region-gender-exc',
  imports: [AgCharts],
  templateUrl: './chart-by-region-gender-exc.component.html',
  styleUrl: './chart-by-region-gender-exc.component.css'
})
export class ChartByRegionGenderExcComponent {
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
          yKey: "maleExcludedCount",
          yName: "MaleExcluded",
        },
        {
          type: "bar",
          direction: "horizontal",
          xKey: "location",
          yKey: "femaleExcludedCount",
          yName: "FemaleExcluded",
        },
        {
          type: "bar",
          direction: "horizontal",
          xKey: "location",
          yKey: "maleAtRiskCount",
          yName: "MaleAtRisk",
        },
        {
          type: "bar",
          direction: "horizontal",
          xKey: "location",
          yKey: "femaleAtRiskCount",
          yName: "FemaleAtRisk",
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
