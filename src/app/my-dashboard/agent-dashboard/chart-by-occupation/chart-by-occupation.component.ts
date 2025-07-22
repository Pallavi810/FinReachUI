import { Component } from '@angular/core';
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
      { occupation: "Farmer", count: 60000 },
      { occupation: "Labour", count: 40000 },
      { occupation: "Retired", count: 7000 },
    ];
  }
}
