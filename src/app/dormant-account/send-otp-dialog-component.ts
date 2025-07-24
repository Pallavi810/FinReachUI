import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-send-otp-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,CommonModule, FormsModule,],
  template: `
 <h2 mat-dialog-title>Send OTP</h2>
    <mat-dialog-content class="otp-container">
      <p>Enter the 4-digit OTP:</p>
      <div class="otp-inputs">
        <input type="text" maxlength="1" [(ngModel)]="otp[0]" (input)="autoFocusNext($event, 0)" />
        <input type="text" maxlength="1" [(ngModel)]="otp[1]" (input)="autoFocusNext($event, 1)" />
        <input type="text" maxlength="1" [(ngModel)]="otp[2]" (input)="autoFocusNext($event, 2)" />
        <input type="text" maxlength="1" [(ngModel)]="otp[3]" />
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
      <button mat-button color="primary" (click)="submitOtp()">Activate</button>
    </mat-dialog-actions>
  `,
    styles: [`
    .otp-container {
      text-align: center;
    }
    .otp-inputs {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 16px 0;
    }
    .otp-inputs input {
      width: 40px;
      height: 40px;
      font-size: 24px;
      text-align: center;
    }
  `]
})
export class SendOtpDialogComponent {

    constructor(private snackBar: MatSnackBar) { }

     otp: string[] = ['', '', '', ''];
     autoFocusNext(event: any, index: number) {
    const input = event.target;
    if (input.value && index < 3) {
      const nextInput = input.parentElement.querySelectorAll('input')[index + 1];
      if (nextInput) nextInput.focus();
    }
  }

  submitOtp() {
    const enteredOtp = this.otp.join('');
    if (enteredOtp.length === 4) {
      /*alert(`Submitted OTP: ${enteredOtp}`);*/
        this.snackBar.open('Submitted Account for activation account will acctivated in 24hrs', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error']
  });
    } else {
      alert('Please enter a 4-digit OTP');
    }
  }
}




