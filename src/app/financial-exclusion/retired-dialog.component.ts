// src/app/software-engineer-dialog/software-engineer-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // If using mat-button in dialog

@Component({
  selector: 'app-retired-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Senior Citizens Savings Scheme (SCSS)</h2>
    <mat-dialog-content>
      <p>Senior Citizen Saving Scheme is a Central Govt. Of India scheme with assured quarterly income. SCSS is probably the best Monthly Income Scheme for Senior Citizens in India, due to its sovereign guarantee, fixed payout and safety of principal.</p>
      <p>Just deposit a lumpsum amount for 5 years and enjoy quarterly payouts. Interest rate is locked at the beginning of purchase.Why Choose SCSS?</p>
      <ul>
        <li>Easily accessable</li>
        <li>High interest rate</li>
        <li>Guaranteed quarterly payouts,and</li>
        <li>Government backing makes it a preferred choice for retirees.</li>
        </ul>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `
})
export class RetiredDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RetiredDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
