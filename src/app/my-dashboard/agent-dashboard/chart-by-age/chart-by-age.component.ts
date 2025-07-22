import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from "ag-charts-community";

@Component({
  selector: 'app-chart-by-age',
  imports: [AgCharts],
  templateUrl: './chart-by-age.component.html',
  styleUrl: './chart-by-age.component.css'
})
export class ChartByAgeComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      title: {
        text: "Age Demographics",
      },
      series: [
        {
          type: "pie",
          angleKey: "count",
          calloutLabelKey: "ageGroup",
          sectorLabelKey: "count",
          sectorLabel: {
            color: "white",
            fontWeight: "bold",
            formatter: ({ value }: { value: number }) => `${(value).toFixed(2)}%`,
          },
          calloutLabel: {
            formatter: ({ value }: { value: string }) => `${(value).slice(0, value.indexOf('('))}`,
          },
          legendItemKey: "ageGroup",
          tooltip: {
            enabled: true,
            renderer: ({ datum }: { datum: any }) => {
              datum.count = datum.count.toFixed(2) + '%';
              return datum
            }
          }
        },
      ],
    };
  }

  ngOnInit() {
    const chartDataInPercent = this.getData();
    let total = 0;
    this.getData().forEach((item: { count: number; }) => {
      total += item.count;
    });
    chartDataInPercent.forEach((item: { count: number; }) => {
      item.count = (item.count / total) * 100; // Convert to percentage
    });
    setTimeout(() => {
      this.options.data = chartDataInPercent;
      this.options = { ...this.options }; // Trigger change detection
    }, 0);
  }

  getData() {
    return [
      { ageGroup: "Young Adults(18-39)", count: 60000 },
      { ageGroup: "Middle-Aged Adults (40-65)", count: 40000 },
      { ageGroup: "Old Adults (66 and above)", count: 17000 }
    ]
  }
}
