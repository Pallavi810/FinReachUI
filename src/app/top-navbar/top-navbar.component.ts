import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-top-navbar',
  imports: [MatIconModule,
    MatToolbarModule,
   MatMenuModule,
   RouterModule,
   MatListModule,
   NgIf,

  ],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {
   selectedLanguage = 'en';
 @Input() drawer!: MatSidenav;
  @Output() toggleSidebar = new EventEmitter<void>();
  topNavItems: any[] = [];
  userName : any;
  isAgent: boolean = false;

  ngOnInit() {
    const role = localStorage.getItem('userRole');

    if(role === 'agent'){
     this.topNavItems = this.getTopNavIteams();
     this.isAgent = true;
    }else if(role == 'customer'){
      this.userName = localStorage.getItem('userName');
    }
  }

  onToggle() {
    this.toggleSidebar.emit();
  }

  getTopNavIteams(){
    return this.topNavItems = [
    {
      routeLink: 'customer-onboarding',
      icon: 'person_add',
      label: 'Customer Onboarding',
    },   {
      routeLink: 'redeem-voucher',
      icon: 'card_giftcard',
      label: 'Redeem Voucher',
    },   {
      routeLink: 'check-voucher',
      icon: 'receipt_long ',
      label: 'Check Voucher',
    },   {
      routeLink: 'my-tickets',
      icon: 'confirmation_number',
      label: 'My Tickets',
    },
  ]
  }

  constructor(private router: Router) { }

   changeLanguage(lang: string): void {
    this.selectedLanguage = lang;
    console.log('Language switched to:', lang);
   }

   logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login'])
   }
}
