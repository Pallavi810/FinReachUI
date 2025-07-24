import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-dashboard',
  imports: [MatIconModule, CommonModule],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {
 customerType = (localStorage.getItem('customerType') as 'NORMAL' | 'DORMANT' | 'FIN_EXCLUDED') ?? 'DORMANT';
}
