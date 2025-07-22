import { Component } from '@angular/core';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-dashboard',
  imports: [CommonModule, AgentDashboardComponent, CustomerDashboardComponent],
  templateUrl: './my-dashboard.component.html',
  styleUrl: './my-dashboard.component.css'
})
export class MyDashboardComponent {
  isAgent: boolean = false;
  constructor() {
    // This constructor can be used for dependency injection or initial setup.
    const role = localStorage.getItem('userRole');
    if (role === 'agent') {
      console.log('User is an ', role);
      this.isAgent = true;
    }
  }

  ngOnInIt() {
    // This method can be used to initialize any data or state when the component is loaded.
    // Currently, it does not perform any actions.

  }
}
