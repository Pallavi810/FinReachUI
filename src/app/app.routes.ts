import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FinancialExclusionComponent } from './financial-exclusion/financial-exclusion.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { layoutComponent } from './layout/layout.component';
import { DormantAccountComponent } from './dormant-account/dormant-account.component';
import { CheckVoucherComponent } from './check-voucher/check-voucher.component';
import { CustomerOnboardingComponent } from './customer-onboarding/customer-onboarding.component';
import { RedeemVoucherComponent } from './redeem-voucher/redeem-voucher.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
    path: '',
    component: layoutComponent,
    canActivate: [AuthGuard],
    children: 
    [{ 
        path: 'my-dashboard',
        component: MyDashboardComponent 
    },
         { 
        path: 'dormant-account',
        component: DormantAccountComponent 
    },
{ 
        path: 'financial-exclusion',
        component: FinancialExclusionComponent
    },{ 
        path: 'check-voucher',
        component: CheckVoucherComponent
    },
    { 
        path: 'customer-onboarding',
        component: CustomerOnboardingComponent
    },
    { 
        path: 'redeem-voucher',
        component: RedeemVoucherComponent
    },{ 
        path: 'my-tickets',
        component: MyTicketsComponent
    },
]

    }
      
];
