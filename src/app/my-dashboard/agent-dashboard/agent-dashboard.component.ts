import { Component } from '@angular/core';
import { ChartByAgeComponent } from './chart-by-age/chart-by-age.component';
import { ChartByOccupationComponent } from './chart-by-occupation/chart-by-occupation.component';
import { ChartByRegionComponent } from './chart-by-region/chart-by-region.component';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { HttpService } from '../../services/http.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agent-dashboard',
  imports: [ChartByAgeComponent,
    ChartByOccupationComponent,
    ChartByRegionComponent,
    MatTabsModule],
  templateUrl: './agent-dashboard.component.html',
  styleUrl: './agent-dashboard.component.css'
})
export class AgentDashboardComponent {
  selectedTab: string = "Dormant"
  DormantChartsSubscription: Subscription[] = [];
  ExcludedChartsSubscription: Subscription[] = [];
  dataForDormantAgeChart: any = [];
  dataForDormantOccupationChart: any = [];
  dataForDormantLocationChart: any = [];
  dataForDormantRegionGenderChart: any = [];

  constructor(private httpService: HttpService) {
  }

  onTabChange(event: MatTabChangeEvent) {
    this.selectedTab = event.tab.textLabel;
  }
}
