import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartConstructorType, HighchartsChartComponent, providePartialHighcharts } from 'highcharts-angular';

@Component({
  selector: 'app-chart-by-location',
  imports: [HighchartsChartComponent],
  providers: [providePartialHighcharts({ modules: () => [import('highcharts/esm/modules/map')] })],
  templateUrl: './chart-by-location.component.html',
  styleUrl: './chart-by-location.component.css'
})
export class ChartByLocationComponent {
  @Input() locationData: any;
  maharastraData: any
  chartOptions!: Highcharts.Options;
  chartConstructor: ChartConstructorType = 'mapChart';
  filterData: any[] = [];

  constructor(private http: HttpClient) {
   }

  ngOnInit() {
    this.filterDta()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
       this.filterDta()
    }
  }

  filterDta() {
    if(this.locationData) {
      for (let loc in this.locationData) {
      let arr = [];
      let index = loc.indexOf(',')
      arr.push(loc.slice(0, index).trimEnd())
      arr.push(this.locationData[loc])
      this.filterData.push(arr);
     }
     this.loadGeoJson();
    }
   }


  loadGeoJson() {
    this.http.get('assets/all-maharashtra.geo.json').subscribe((geoJson: any) => {
      this.maharastraData = geoJson;
      this.initChartOptions();
    })
  }

  initChartOptions() {
    this.chartOptions = {
      chart: {
        map: this.maharastraData,
        height: 365
      },
      title: {
        text: 'Risk Heat Map',
        align: 'center'
      },
      mapNavigation: {
        enabled: true,
        enableButtons: false
      },
      xAxis: {
        labels: {
          enabled: false
        }
      },
      colorAxis: {
        labels: {
          format: '{value}%'
        },
        stops: [
          [0.2, '#188e2a'],
          [0.6, '#fee401'],
          [1, '#df1309']
        ],
        min: 0,
        max: 6
      },
      series: [
        {
          type: 'map',
          name: 'Dormant account count',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.properties.district}',
            style: {
              fontSize: '10px'
            }
          },
          allAreas: true,
          data: this.filterData
        }
      ]
    }
  }
}
