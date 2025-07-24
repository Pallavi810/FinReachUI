import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [ MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  hidePassword: boolean = true;
  captchaChecked:boolean = true;
  selectedRole: 'agent' | 'customer' = 'agent';
  username = '';
  password = '';
  captchaAnswer: string = '';

  // Dummy users
  dummyUsers = {
    agent: [{
      username: 'rohit',
      password: 'rohit123'
    },
    {
      username: 'rahul',
      password: 'rahul123'
    }
  ],
    customer: [{
      username: 'amit',
      password: 'amit123'
    },
  {
      username: 'rohan',
      password: 'rohan123'
    }]
  };

  selectRole(role: 'agent' | 'customer') {
  this.selectedRole = role;
}
constructor(private router: Router,  private snackBar: MatSnackBar) { }

  login() {
    const users = this.dummyUsers[this.selectedRole];

  for (let user of users) {
    if (user.username === this.username && user.password === this.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole',this.selectedRole)
      localStorage.setItem('userName', user.username)
      this.router.navigate(['/my-dashboard']);
      break; 
    }else{
    this.snackBar.open('Invalid username or password', 'Close', {
    duration: 3000,
    panelClass: ['snackbar-error']
  });
    }
  }
}

}
