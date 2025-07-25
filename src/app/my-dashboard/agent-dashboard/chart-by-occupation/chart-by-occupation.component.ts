import { Component, Input, SimpleChanges } from '@angular/core';
import { AgChartOptions } from "ag-charts-community";
import { AgCharts } from "ag-charts-angular";
@Component({
  selector: 'app-chart-by-occupation',
  imports: [AgCharts],
  templateUrl: './chart-by-occupation.component.html',
  styleUrl: './chart-by-occupation.component.css'
})
export class ChartByOccupationComponent {
  public options: AgChartOptions;
  @Input() chartData: any;

  constructor() {
    this.options = {
      title: {
        text: "Occupational Demographics",
      },
      series: [
        {
          type: "donut",
          angleKey: "count",
          innerRadiusRatio: 0.4,
          outerRadiusRatio: 0.9,
          calloutLabelKey: "occupation",
          sectorLabelKey: "count",
          sectorLabel: {
            color: "white",
            fontWeight: "bold",
            formatter: ({ value }: { value: number }) => `${(value).toFixed(2)}%`,
          },

          tooltip: {
            renderer: function ({ datum }) {
              return {
                data: [
                  {
                    label: datum.occupation,
                    value: datum.count.toFixed(2) + '%',  // Format the value as a percentage],
                  },
                ],
              };
            },
          },
        },
      ],
    };
  }

  percentRenderer(params: any) {
    return {
      content: Number(params.value).toFixed(2) + '%'
    }
  }

  percentFormatter(params: any) {
    return params.value.toFixed(0) + '%'
  }
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.setChartData();
    }
  }

  setChartData() {
    if (this.chartData) {
      let chartDataInPercent = [];
      chartDataInPercent.push({ occupation: 'Farmer', count: this.chartData.Farmer });
      chartDataInPercent.push({ occupation: 'Labour', count: this.chartData.Labour });
      chartDataInPercent.push({ occupation: 'Retired', count: this.chartData.Retired });
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
}
