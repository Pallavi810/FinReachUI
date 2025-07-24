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
      label: 'Financial Exclusion',
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
      routeLink: 'check-voucher',
      icon: 'receipt_long ',
      label: 'Check Voucher',
    } ]
}
   }

}