import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-side-navbar',
  imports: [RouterModule,
    MatSidenavModule,
    MatListModule,MatIconModule,MatToolbarModule ],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
 sideNavItems: any[] = [];

   ngOnInit() {
    const role = localStorage.getItem('userRole');

    if(role === 'agent'){

   this.sideNavItems = [
    {
      routeLink: 'my-dashboard',
      icon: 'home',
      label: 'My Dashboard',
    },
     {
      routeLink: 'dormant-account',
      icon: 'remove_circle',
      label: 'Dormant Account',
    },
    {
      routeLink: 'financial-exclusion',
      icon: 'block',
      label: 'At Risk Report',
    }, {
      routeLink: 'check-voucher',
      icon: 'receipt_long ',
      label: 'Check Voucher',
    },   {
      routeLink: 'my-tickets',
      icon: 'confirmation_number',
      label: 'My Tickets',
    },
        {
      routeLink: 'customer-onboarding',
      icon: 'person_add',
      label: 'Customer Onboarding',
    }
  ];
}
else if (role === 'customer'){
  this.sideNavItems = [
    {
      routeLink: 'my-dashboard',
      icon: 'home',
      label: 'My Dashboard',
    },
   {
      routeLink: 'redeem-voucher',
      icon: 'receipt_long ',
      label: 'Redeem Voucher',
    } ]
}
   }

}
