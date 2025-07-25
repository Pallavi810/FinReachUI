import { Component, Input, SimpleChanges } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions, PixelSize } from "ag-charts-community";

@Component({
  selector: 'app-chart-by-age',
  imports: [AgCharts],
  templateUrl: './chart-by-age.component.html',
  styleUrl: './chart-by-age.component.css'
})
export class ChartByAgeComponent {
  public options: AgChartOptions;
  @Input() chartData: any;

  constructor() {
    this.options = {
      title: {
        text: "Age Demographics",
      },
      legend: {
        position: "bottom",
        item: {
          label: {
            fontSize: 11,
          },
        },
      },
      series: [
        {
          type: "pie",
          angleKey: "count",
          calloutLabelKey: "ageGroup",
          sectorLabelKey: "count",
          legendItemKey: "ageGroup",
          sectorLabel: {
            color: "white",
            fontWeight: "bold",
            formatter: ({ value }: { value: number }) => `${(value).toFixed(2)}%`,
          },
          calloutLabel: {
            color: "black",
            formatter: ({ value }: { value: string }) => `${(value).slice(0, value.indexOf('('))}`,
          },
          tooltip: {
            renderer: function ({ datum }) {
              return {
                data: [
                  {
                    label: datum.ageGroup,
                    value: datum.count.toFixed(2) + '%',  // Format the value as a percentage],
                  },
                ],
              };
            },
          },
        }
      ],
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.setChartData();
    }
  }

  setChartData() {
    let chartDataInPercent = this.chartData;
    let total = 0;
    chartDataInPercent.forEach((item: { count: number; }) => {
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
}
