import { Component } from '@angular/core';
import { ChartByAgeComponent } from './chart-by-age/chart-by-age.component';
import { ChartByOccupationComponent } from './chart-by-occupation/chart-by-occupation.component';
import { ChartByRegionComponent } from './chart-by-region/chart-by-region.component';

@Component({
  selector: 'app-agent-dashboard',
  imports: [ChartByAgeComponent, ChartByOccupationComponent, ChartByRegionComponent],
  templateUrl: './agent-dashboard.component.html',
  styleUrl: './agent-dashboard.component.css'
})
export class AgentDashboardComponent {

}
