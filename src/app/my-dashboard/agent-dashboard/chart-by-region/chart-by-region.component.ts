import { Component } from '@angular/core';
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

  constructor() {
    this.options = {
      title: {
        text: "Regional Demographics of Customers",
      },
      subtitle: {
        text: "With a focus on gender distribution of customers across different regions",
      },
      series: [
        {
          type: "bar",
          direction: "horizontal",
          xKey: "region",
          yKey: "maleCount",
          yName: "Male",
        },
        {
          type: "bar",
          direction: "horizontal",
          xKey: "region",
          yKey: "femaleCount",
          yName: "Female",
        },
        {
          type: "bar",
          direction: "horizontal",
          xKey: "region",
          yKey: "otherCount",
          yName: "Others",
        }
      ],
    };
  }
  ngOnInit() {
    const chartData = this.getData();
    setTimeout(() => {
      this.options.data = chartData;
      this.options = { ...this.options }; // Trigger change detection
    }, 0);
  }

  getData() {
    return [
      { region: "North America", maleCount: 50000, femaleCount: 30000, otherCount: 2000 },
      { region: "Europe", maleCount: 30000, femaleCount: 25000, otherCount: 1500 },
      { region: "Asia", maleCount: 20000, femaleCount: 18000, otherCount: 1000 },
      { region: "South America", maleCount: 10000, femaleCount: 8000, otherCount: 500 },
      { region: "Africa", maleCount: 5000, femaleCount: 4000, otherCount: 300 },
      { region: "Australia", maleCount: 7000, femaleCount: 6000, otherCount: 200 },
    ];
  }
}
