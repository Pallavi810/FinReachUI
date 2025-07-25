import { Component } from '@angular/core';
import { ChartByAgeComponent } from './chart-by-age/chart-by-age.component';
import { ChartByOccupationComponent } from './chart-by-occupation/chart-by-occupation.component';
import { ChartByRegionComponent } from './chart-by-region/chart-by-region.component';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { HttpService } from '../../services/http.services';
import { forkJoin, Subscription } from 'rxjs';
import { ChartByLocationComponent } from './chart-by-location/chart-by-location.component';
import { ChartByRegionGenderExcComponent } from './chart-by-region-gender-exc/chart-by-region-gender-exc.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agent-dashboard',
  imports: [ChartByAgeComponent,
    ChartByOccupationComponent,
    ChartByRegionComponent,
    ChartByRegionGenderExcComponent,
    MatTabsModule, ChartByLocationComponent],
  templateUrl: './agent-dashboard.component.html',
  styleUrl: './agent-dashboard.component.css'
})
export class AgentDashboardComponent {
  selectedTab: string = "Dormant"
  dormantChartsSubscription: Subscription[] = [];
  dxcludedChartsSubscription: Subscription[] = [];
  dataForDormantAgeGroupChart: any = [];
  dataForDormantOccupationChart: any = [];
  dataForDormantLocationChart: any = [];
  dataForDormantRegionGenderChart: any = [];

  dataForExcludedAgeGroupChart: any = [];
  dataForExcludedOccupationChart: any = [];
  dataForExcludedLocationChart: any = [];
  dataForExcludedRegionGenderChart: any = [];
  locationData: any = [];
  loading = true
    private routeSubscription: Subscription | undefined;;


  constructor(private httpService: HttpService, private route: ActivatedRoute,
  ) {
     this.getData();
   }

  ngOnInit() {
   this.getData()
  }



  getData() {
    const countByOccupation = this.httpService.getCountDormantAccountsByOccupation();
    const countByLocationGender = this.httpService.getCountDormantLocationGender();
    const countByLocation = this.httpService.getCountDormantAccountsByLocation();
    const countByAgeY = this.httpService.getCountDormantAccountsByAge(18, 39);
    const countByAgeM = this.httpService.getCountDormantAccountsByAge(40, 65);
    const countByAgeO = this.httpService.getCountDormantAccountsByAge(65, 99);


    const countByOccupationExc = this.httpService.getCountExcludedAccountsByOccupation();
    const countByLocationGenderExc = this.httpService.getCountExcludedLocationGender();
    const countByLocationExc = this.httpService.getCountExcludedAccountsByLocation();
    const countByAgeYExc = this.httpService.getCountExcludedAccountsByAge(18, 39);
    const countByAgeMExc = this.httpService.getCountExcludedAccountsByAge(40, 65);
    const countByAgeOExc = this.httpService.getCountExcludedAccountsByAge(65, 99);

    forkJoin([countByOccupation, countByLocationGender, countByLocation, countByAgeY, countByAgeM, countByAgeO,
      countByOccupationExc, countByLocationGenderExc, countByLocationExc, countByAgeYExc, countByAgeMExc, countByAgeOExc
    ]).subscribe(
      ([occupation, locationGender, location, ageY, ageM, ageO, occupationExc, locationGenderExc, locationExc, ageYExc, ageMExc, ageOExc]) => {
        this.dataForDormantOccupationChart = occupation;
        this.dataForDormantRegionGenderChart = locationGender;
        this.dataForDormantLocationChart = location;
        this.dataForDormantAgeGroupChart.push({
          ageGroup: 'Young Adults(18-39)',
          count: ageY
        });
        this.dataForDormantAgeGroupChart.push({
          ageGroup: 'Middle-Aged(40-65)',
          count: ageM
        });
        this.dataForDormantAgeGroupChart.push({
          ageGroup: 'Old Adults(66 and above)',
          count: ageO
        });
        this.dataForExcludedOccupationChart = occupationExc;
        this.dataForExcludedRegionGenderChart = locationGenderExc;
        this.dataForExcludedLocationChart = locationExc;

        this.dataForExcludedAgeGroupChart.push({
          ageGroup: 'Young Adults(18-39)',
          count: ageYExc
        });
        this.dataForExcludedAgeGroupChart.push({
          ageGroup: 'Middle-Aged(40-65)',
          count: ageMExc
        });
        this.dataForExcludedAgeGroupChart.push({
          ageGroup: 'Old Adults(66 and above)',
          count: ageOExc
        });
        this.loading = false;
      }
    )
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
  onTabChange(event: MatTabChangeEvent) {
    this.selectedTab = event.tab.textLabel;
  }
}
