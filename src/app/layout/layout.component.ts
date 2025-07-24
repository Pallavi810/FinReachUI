import { Component, ViewChild } from '@angular/core';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  imports: [TopNavbarComponent,
    SideNavbarComponent,
    RouterOutlet,
  MatSidenavModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class layoutComponent {
 isAgent: boolean = false;
    ngOnInit() {
        const role = localStorage.getItem('userRole');
        if(role === 'agent'){
         this.isAgent = true;
        }
      
    }

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSidenavOpen = true;

  toggleSidebar() {
    this.sidenav.toggle();
  }
}
